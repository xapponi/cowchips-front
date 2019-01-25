import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import axios from 'axios'
import localStorage from '@/helpers/localStorage'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null
  },
  actions: {
    login(context, loginInfo) {
      // TODO axios request to the backend for login
      axios.post('/login', loginInfo)
        .then(res => {
          const jwt = res.data.jwt
          const user = res.data.user
          localStorage.setCookie('jwt', jwt)
          localStorage.setCookie('user', JSON.stringify(user))
          context.commit('setUser', user)
        })
        .catch(err => {
          console.error(err)
        })
      // TODO set the jwt token the cookie
      // context.commit('setUser', loginInfo)
      // router.push('/')
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  }
})

export default store
