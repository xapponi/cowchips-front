<template>
  <v-container>
    <h2>Register</h2>

    <v-alert v-if="error" :value="true" type="error">{{error}}</v-alert>

    <div class="form-group" >
      <label for="Name">Name</label>
      <input required type="text" v-model.trim='name' id='Name' placeholder="Enter Name">
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input required type="text" v-model.trim='email' id='email' placeholder="Enter Email">
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input required type="password" v-model='password' placeholder="Password" id='password'>
    </div>

    <div class="form-group">
      <label for="phone">Phone</label>
      <input type="tel" v-model="phone" id='phone' placeholder="Phone" />
    </div>

    <v-btn  id="Register" @click="register">Register</v-btn>
  </v-container>
</template>

<script>
  import axios from 'axios'
  import localStorage from '@/helpers/localStorage'
  import { authTokenName } from '@/config/auth'

  import Vue from 'vue'


  import VueTheMask from 'vue-the-mask'
  Vue.use(VueTheMask)

  export default {
    name: "Register",
    data() {
      return {
        success:'',
        error: '',
        email: '',
        password: '',
        name: '',
        phone:'',
        dob: new Date(4000000000),
        location:  {
        "address": "123 Main St",
          "state": "Iowa",
          "zip": "50011",
          "city": "Ames"
        }
      }
    },

    methods: {
      register() {
        axios.post('/Register',{
          email: this.email,
          password: this.password,
          name: this.name,
          phone: this.phone,
          dob: this.dob,
          location: this.location,
        })
          .then(res=>{
            this.success=true
            const token = res.data.token
            localStorage.setCookie(authTokenName, token)
            this.$router.push('/home')
          })
          .catch(err=>{
            this.error = err.response.data.error
          })
      }
    }
  }
</script>

<style scoped>

</style>
