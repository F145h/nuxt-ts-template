import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => {
  return {
    authUser: null,
  }
}

export const mutations = {
  SET_USER: function (state, user) {
    state.authUser = user
  },
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  async nuxtServerInit({ dispatch, commit }, { req }) {

    if (req.session) {
      if (req.session.authUser)
        commit('SET_USER', req.session.authUser)
    }

    //req.session.touch();
  },
  async logout({ commit }) {
    await axios.post('/api/logout')
    commit('SET_USER', null)
  }
}