import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    isRoot: false,
  },
  mutations: {
    setUserName (state, username) {
      state.username = username;
    },
    setRoot (state, isRoot) {
      state.isRoot = isRoot;
    },
    clearUserName (state) {
      state.username = '';
      state.isRoot = false;
    },
  },
  actions: {
  }
})
