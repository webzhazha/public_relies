<template>
  <div id="app">
    dsfgdsfdsf
    <el-button @click="handlerClick">按钮</el-button>
    <footNav  />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      STATICDOMAIN: process.env.NODE_ENV == 'production' ? `//wximg.91160.com` : `//wximg.91160.com`,
      IMAGESDOMAIN: process.env.NODE_ENV == 'production' ? `//images.91160.com` : `//images.91160.com`,
    }
  },
  methods: {
    handlerClick(){
      console.log('触发按钮');
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
