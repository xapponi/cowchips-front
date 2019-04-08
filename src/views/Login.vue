
<template>
  <v-container>
    <span>Login Page!</span>
    <v-alert v-if="error" :value="true" type="error">{{error}}</v-alert>
    <v-text-field id="email" placeholder="Email" v-model="email" browser-autocomplete="off"></v-text-field>
    <v-text-field id="password" :type="'password'" placeholder="Password" v-model="password"></v-text-field>
    <v-btn id="submit" @click="submit">Login</v-btn>
    <span>OR</span>
    <v-btn to="/register">Register</v-btn>
  </v-container>
</template>

<script>
  import axios from 'axios'
  import localStorage from '@/helpers/localStorage'
  import { authTokenName } from '@/config/auth'

  export default {
    name: 'Login',
    data() {
      return {
        error: '',
        email: '',
        password: '',
      }
    },
    beforeCreate() {
      if(localStorage.isUserLoggedIn()) {
        this.$router.push('/')
      }
    },
    methods: {
      submit() {
        axios.post('/login', {
          email: this.email,
          password: this.password
        })
          .then(res => {

            const token = res.data.token
            localStorage.setCookie(authTokenName, token)
            this.$router.push('/home')
          })
          .catch(err => {
            this.error = err.response ? err.response.data.error : err
            console.error(err)
          })
      }
    }
  }
</script>

<style scoped>

</style>
