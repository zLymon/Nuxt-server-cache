const LRU = require('lru-cache')

const cachePage = new LRU({
  max: 10,
  maxAge: 1000 * 60 * 10
})

module.exports = cachePage