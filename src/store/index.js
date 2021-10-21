import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:{
      title: '',
      status: false,
      color: 'error'
    }
  },
  mutations: {
    setShowLoading(state,payload){
      state.loading.title = payload.title
      state.loading.color = payload.color
      state.loading.status = true
    },
    setHideLoading(state){
      state.loading.status = false
    }

  },
  actions: {
  },
  modules: {
  }
})
