const cachePage = require('./globalCache')
const fs = require('fs')

export default function (req, res, next) {
  const pathname = req.path

  // 通过路由判断，只有首页才进行缓存
  if (pathname === '/') {
    const existsHtml = cachePage.get('index')

    if (existsHtml) {
      return res.end(existsHtml, 'utf-8')
    } else {
      res.original_end = res.end
      // 重写res.end

      res.end = function (data) {
        if (res.statusCode === 200) {
        // 设置缓存
          cachePage.set('index', data)
        }
        // 最终返回结果

        res.original_end(data, 'utf-8')
      }
    }
  }

  next()
}