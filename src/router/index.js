import Vue from 'vue'
import Router from 'vue-router'


const Login = () => import('../page/Login.vue')
const Main = () => import('../page/Main.vue')
const My = () => import('../page/My.vue')
const myInfo = () => import('../page/myInfo.vue')
const article = () => import('../page/article.vue')
const message = () => import('../page/message.vue')
const collection = () => import('../page/collection.vue')
const lecture = () => import('../page/myLecture.vue')
const latestNews = () => import('../page/latestNews.vue')
const Register = () => import('../page/Register.vue')
const privateLetter = () => import('../page/privateLetter.vue')

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
    },
    {
      path: '/latestNews',
      name: 'latestNews',
      component: latestNews,
      beforeEnter: (to, from, next) => {
        document.getElementsByTagName('body')[0].style.background = '#f2f2f2'
        next()
      }
    },
    {
      path: '/privateLetter',
      name: 'privateLetter',
      component: privateLetter,
      beforeEnter: (to, from, next) => {
        document.getElementsByTagName('body')[0].style.background = '#f2f2f2'
        next()
      }
    }
  ]
})
