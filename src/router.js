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
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/donation',
      name: 'donation',
      component: Donation,
      requiresAuth: true
    },
    {
      path: '/event-select',
      name: 'Even Selection',
      component: Events,
      requiresAuth: true
    },
    {
      path: '/tiles',
      name: 'Tile Selection',
      component: Tiles,
      requiresAuth: true
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
