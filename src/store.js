import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
  },
  mutations: {
    setUserName (state, username) {
      state.username = username;
    },
    clearUserName (state) {
      state.username = '';
    },
  },
  actions: {

  }
})
