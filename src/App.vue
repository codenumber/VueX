<template>
  <div id="app">
    <my-addtration></my-addtration>
    <p>______________________</p>
    <my-subtration></my-subtration>
  </div>
</template>
<script>
import Addition from './components/Addition.vue'
import Subtration from './components/Subtration.vue'

export default {
  name: 'App',
  components: {
    'my-addtration': Addition,
    'my-subtration': Subtration
  }
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
