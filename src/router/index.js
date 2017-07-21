import Vue from 'vue'
import Router from 'vue-router'
import Register from '../page/register.vue'
import Login from '../page/login.vue'
import Main from '../page/main.vue'
import My from '../page/my.vue'
import myInfo from  '../page/myInfo.vue'
import article from '../page/article.vue'
import message from '../page/message.vue'
import collection from '../page/collection.vue'
import lecture from '../page/myLecture.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        document.getElementsByTagName('body')[0].style.background = '#f2f2f2'
        next()

      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      beforeEnter: (to, from, next) => {
        document.getElementsByTagName('body')[0].style.background = '#f2f2f2'
        next()

      }
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main,
      beforeEnter: (to, from, next) => {
        document.getElementsByTagName('body')[0].style.background = '#f2f2f2'
        next()
      }
    },
    {
      path: '/My',
      name: 'My',
      component: My,
      beforeEnter: (to, from, next) => {
        document.getElementsByTagName('body')[0].style.background = '#f2f2f2'
        next()
      }
    },
    {
      path: '/myInfo',
      name: 'myInfo',
      component: myInfo,
      beforeEnter: (to, from, next) => {
        document.getElementsByTagName('body')[0].style.background = '#f2f2f2'
        next()
      }
    },
    {
      path: '/article',
      name: 'article',
      component: article,
      beforeEnter: (to, from, next) => {
        document.getElementsByTagName('body')[0].style.background = '#fff'
        next()
      }
    },
    {
      path: '/message',
      name: 'message',
      component: message,
      beforeEnter: (to, from, next) => {
        document.getElementsByTagName('body')[0].style.background = '#fff'
        next()
      }
    },
    {
      path: '/collection',
      name: 'collection',
      component: collection,
      beforeEnter: (to, from, next) => {
        document.getElementsByTagName('body')[0].style.background = '#f2f2f2'
        next()
      }
    },
    {
      path: '/lecture',
      name: 'lecture',
      component: lecture,
      beforeEnter: (to, from, next) => {
        document.getElementsByTagName('body')[0].style.background = '#fff'
        next()
      }
    }
  ]
})
