import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main.vue'
import Register from '@/components/Register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
