<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex>
        <div style="text-align: center;">
          <v-btn v-if="!isUserLoggedIn()" round to="/login">Login</v-btn>
          <v-btn v-if="!isUserLoggedIn()" round to="/register">Register</v-btn>
          <span v-if="isUserLoggedIn()">Logged in as: {{userEmail}}</span>
          <v-btn v-if="isUserLoggedIn()" round  to="/account">Account</v-btn>
          <v-btn v-if="isUserLoggedIn()" round  @click="logout" >Logout</v-btn>
        </div>
      </v-flex>

      <!--<v-flex xs12>-->
        <!--<v-img-->
            <!--:src="require('../assets/boo_radley.png')"-->
            <!--class="my-3"-->
            <!--contain-->
            <!--height="100"-->
        <!--&gt;</v-img>-->
      <!--</v-flex>-->

      <!--<v-flex xs12>-->
        <!--<v-img-->
            <!--:src="require('../assets/play-cow-patty.jpg')"-->
            <!--class="my-3"-->
            <!--contain-->
            <!--height="400"-->
        <!--&gt;</v-img>-->
      <!--</v-flex>-->


      <v-flex mb-4>
        <div style="text-align: center;">
          <h1 v-if="isUserLoggedIn()" class="display-4 font-weight-thin mb-3" >
            Welcome {{userEmail}} to CowChips4Charity!
          </h1>
          <h1 v-else class="display-4 font-weight-thin mb-3" >
            Welcome to CowChips4Charity!
          </h1>

          <p class="subheading font-weight-regular">
            For more information about the Boo Radley Foundation's cause, please visit the foundation's
            <a
                v-for="(boo, i) in booRadleyFoundation"
                :key="i"
                :href="boo.href"
                class="subheading mx-3"
                target="_blank"
            >
              {{ boo.text }}
            </a>
          </p>
        </div>
      </v-flex>

      <v-flex md-center xs12 lg12>
        <div style="text-align: center;">
          <v-btn large dark round to="/play">Play</v-btn>
          <v-btn large dark round to="/donation?full=true">Donate</v-btn>
        </div>
      </v-flex>

      <v-flex md-center>
        <!--<div style="text-align: center;">-->
        <div class="center2">
          <v-btn round to="/about">About</v-btn>
        </div>
      </v-flex>


    </v-layout>
  </v-container>

</template>

<script>
  import {authTokenName} from '@/config/auth'
  import localStorage from '@/helpers/localStorage'
  import axios from 'axios'

  export default {
    name: 'HomePage',
    created() {
      if(!this.isUserLoggedIn())
        return

      axios.get('/account')
        .then(res => {
          this.userEmail = res.data.email
        })
        .catch(err => {

        })
    },
    data: () => ({
      booRadleyFoundation: [
        {
          text: 'home page',
          href: 'http://www.booradleyfoundation.org/'
        }
      ],
      userEmail: ''
    }),
    computed: {
      email() {
        if (this.$store.state.user)
          return ' ' + this.$store.state.user.email
        return ''
      }
    },
    methods: {
      logout() {
        localStorage.eraseCookie(authTokenName)
        axios.defaults.headers['Authorization'] = localStorage.getCookie(authTokenName)
        this.$forceUpdate()
      },
      isUserLoggedIn() {
        return localStorage.isUserLoggedIn()
      }
    }
  }
</script>

<style>

  .center2 {
    text-align: center;
  }

</style>
