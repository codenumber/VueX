import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add (state) {
      state.count++
    },
    addNumber (state, step) {
      state.count += step
    },
    sub (state) {
      state.count--
    },
    subN (state, step) {
      state.count -= step
    }
  },
  actions: {
    subSync (context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000)
    },
    subNSync (context, step) {
      setTimeout(() => {
        context.commit('subN', 6)
      }, 1000)
    },
    addAsync (context) {
      setTimeout(() => {
        context.commit('add')
      }, 1000)
    },
    addNAsync (context, step) {
      setTimeout(() => {
        context.commit('addNumber', step)
      }, 1000)
    }
  },
  modules: {
  },
  getters: {
    showCount (state) {
      return '当前最新的值为【' + state.count + '】'
    }
  }
})
