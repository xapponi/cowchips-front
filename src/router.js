import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Donation from './views/Donation'
import Events from './views/Events'
import Tiles from './views/Tiles'
import Login from './views/Login'
import Account from './views/Account'
import UserTiles from './views/UserTiles'
import Stepper from './views/Stepper'
import Register from './views/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/play',
      name: 'Play',
      component: Stepper
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/donation',
      name: 'donation',
      component: Donation,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/event-select',
      name: 'Even Selection',
      component: Events,
      meta: {
        requiresAuth: true
      }
    },
    {

      path: '/register',
      name: 'Register',
      component: Register,
      meta:{
                requiresAuth:false
          }
    },
    {
      path: '/tiles',
      name: 'Tile Selection',
      component: Tiles,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/account/tiles',
      name: 'Your Tiles',
      component: UserTiles,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
