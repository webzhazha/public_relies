<template>
  <div id="app">
    dsfgdsfdsf
    <el-button @click="handlerClick">按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
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
