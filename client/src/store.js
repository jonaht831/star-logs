import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

let auth = axios.create({
  baseURL: "http://localhost:3000/auth",
  withCredentials: true
})

let api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    logs: []
  },
  mutations: {
    SETUSER(state, user) {
      state.user = user
    },
    setLogs(state, logs) {
      state.logs = logs
    }
  },
  actions: {
    login({ commit }, creds) {
      auth.post('login', creds)
        .then(res => commit('SETUSER', res.data))
        .catch(err => alert(err))
    },
    register({ commit }, creds) {
      auth.post('register', creds)
        .then(res => commit('SETUSER', res.data))
        .catch(err => alert(err))

    },
    authenticate({ commit }) {
      auth.get('authenticate')
        .then(res => commit('SETUSER', res.data))
        .catch(err => {
          router.push({ name: 'auth' })
        })
    },
    showLogs({ commit }) {
      api.get('logs')
        .then(res => {
          console.log(res)
          let data = res.data
          commit('setLogs', data)
        })
    }
  }
})
