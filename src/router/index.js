import Vue from 'vue'
import Router from 'vue-router'
import Register from '../page/register'
import Login from '../page/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register,
      beforeEnter: (to, from, next) => {
        document.getElementsByTagName('body')[0].style.background = '#f2f2f2'
        next()

      }
    },
    {
      path:'/login',
      name:'Login',
      component:Login,
      beforeEnter: (to, from, next) => {
        document.getElementsByTagName('body')[0].style.background = '#f2f2f2'
        next()

      }
    }
  ]
})
