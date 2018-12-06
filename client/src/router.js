import Vue from 'vue'
import Router from 'vue-router'
import Logs from './views/Logs.vue'
import Auth from './views/Auth.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'logs',
      component: Logs
    },
    {
      path: '/account',
      name: 'auth',
      component: Auth
    }
  ]
})
