<template>
  <div id="app">
    <Header />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import PostComent from '@/components/PostComent'
import Header from '@/Header/Header'
export default {
  components: {
    Header,
    PostComent,
  },
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}
ul {
  padding: 0;
  margin: 0;
}
</style>
