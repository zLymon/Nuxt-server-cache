<template>
  <div class="container">
    <!-- <div>
      <logo />
      <h1 class="title">
        nuxt-server-cache
      </h1>
      <h2 class="subtitle">
        My dandy Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div> -->
    <button @click="$router.push('/second')" style="position: absolute; left: 20px; top: 20px">link</button>
    <nuxt-link to="/second" style="position: absolute; left: 80px; top: 80px">link</nuxt-link>
    <ul>
      <li
        v-for="(t, index) in tags"
        :key="index">
        {{ t }}
      </li>
    </ul>
    <ul>
      <li
        v-for="(f, index) in firsts"
        :key="index">
        {{ f }}
      </li>
    </ul>
    <ul>
      <li
        v-for="(e, index) in exclusive"
        :key="index">
        {{ e }}
      </li>
    </ul>
    <ul>
      <li
        v-for="(m, index) in mv"
        :key="index">
        {{ m }}
      </li>
    </ul>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  async asyncData ({ $axios }) {
    const data = await $axios.get('http://www.lymon.top/music_api/playlist/hot')
    const data1 = await $axios.get('http://www.lymon.top/music_api/mv/first?limit=100')
    const data2 = await $axios.get('http://www.lymon.top/music_api/mv/exclusive/rcmd?limit=100')
    const data3 = await $axios.get('http://www.lymon.top/music_api/personalized/mv')
    const tags = data.data.tags
    const firsts = data1.data.data
    const exclusive = data2.data.data
    const mv = data3.data.result
    return { tags, firsts, exclusive, mv }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
