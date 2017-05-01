import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Authentication modules
const authmodule = {
  namespaced: true,
  state: {
    // authentication status
    status: false
  },
  getters: {
    getstatus: (state) => {
      return state.status
    }
  },
  mutations: {
    activate (state) {
      state.status = true
    },
    deactivate (state) {
      state.status = false
    }
  },
  actions: {
    setstatus ({ commit, state }, userstatus) {
      state.status = userstatus
    }
  }
}

// App module
const purchasemodule = {
  namespaced: true,
  state: {
    // Date
    date: ''
  },
  getters: {
    get_sidebar_status: (state) => {
      return state.date
    }
  },
  mutations: {
    switch_sidebar_status (state, value) {
      state.date = value
    }
  }
}

// Store
const store = new Vuex.Store({
  modules: {
    auth: authmodule,
    purchase: purchasemodule
  }
})

export default store
