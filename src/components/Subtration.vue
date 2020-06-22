<template>
  <div>
    <!-- <h2>当前count的值：{{count}}</h2> -->
   <h2>{{showCount}}</h2>
    <button @click="sub1"> - 1</button>
    <button @click="sub2"> - N </button>
    <button @click="subNSync"> - NSync</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showCount'])
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    sub1 () {
      this.$store.dispatch('subSync')
    },
    sub2 () {
      this.subN()
    },
    subNSync () {
      this.$store.dispatch('subNSync', 4)
    }
  }
}
</script>

<style>
</style>
