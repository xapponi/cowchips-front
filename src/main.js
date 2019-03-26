import store from './store'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify/lib'
import Vue from 'vue'
import Vuex from 'vuex'
import VueTheMask from 'vue-the-mask'
import localStorage from '@/helpers/localStorage'
import axios from 'axios'
import { authTokenName } from '@/config/auth'
import ToggleButton from 'vue-js-toggle-button'



axios.defaults.baseURL = process.env.VUE_APP_BACKEND_URL
axios.defaults.withCredentials = true

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(VueTheMask)
Vue.use(ToggleButton)



router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    const jwt = localStorage.getCookie(authTokenName)
    if (!jwt) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
