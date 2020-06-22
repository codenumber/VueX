<template>
  <div>
    <!-- <h3>当前count的值：{{$store.state.count}}</h3>-->
    <h1>{{this.$store.getters.showCount}}</h1>
    <button @click="handles"> + 1</button>
    <button @click="handles1"> + N</button>
    <button @click="addAsync"> + 1 Async</button>
    <button @click="addNAsync(3)"> + N Async</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {

    }
  },
  methods: {
    ...mapActions(['addAsync', 'addNAsync']),
    handles () {
      this.$store.commit('add')
    },
    handles1 () {
      this.$store.commit('addNumber', 4)
    }
  }
}
</script>

<style>
</style>
