<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12 offset-xs8>
        <div style="text-align: center;">
          <v-btn round to="/login">Login</v-btn>
          <v-btn round  @click="logout" >Logout</v-btn>
<!--
          <button round v-on:click="change">{{btntext}}</button>
-->

          <!--
                   <toggle-button id = "toggler" large @change="onChangeEventHandler"  width = "90" :labels="{checked: 'Logout', unchecked: 'Login'}" style="margin-left: 0px" />
          -->
        </div>
      </v-flex>
      <v-flex xs12>
        <v-img
            :src="require('../assets/boo_radley.png')"
            class="my-3"
            contain
            height="100"
        ></v-img>
      </v-flex>

      <v-flex xs12>
        <v-img
            :src="require('../assets/play-cow-patty.jpg')"
            class="my-3"
            contain
            height="400"
        ></v-img>
      </v-flex>


      <v-flex mb-4>
        <div style="text-align: center;">
          <h1 class="display-4 font-weight-thin mb-3" >
            Welcome{{email}} to the CowChips4Charity event page!
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

      <v-flex xs12 md-center>
        <div style="text-align: center;">
          <v-btn large dark round to="/donation">Donate</v-btn>
        </div>
      </v-flex>

      <v-flex md-center>
        <div style="text-align: center;">
          <v-btn round to="/play">Play</v-btn>
          <v-btn round to="/account/tiles">Your Tiles</v-btn>
          <v-btn round to="/account">Account</v-btn>
        </div>
      </v-flex>


    </v-layout>
  </v-container>

</template>

<script>
  import {authTokenName} from '@/config/auth'
  import localStorage from '@/helpers/localStorage'



  export default {
    name: 'HomePage',
    data: () =>
            ({
      booRadleyFoundation: [
        {
          text: 'home page',
          href: 'http://www.booradleyfoundation.org/'
        }
      ]
    }),
    computed: {
      email() {
        if (this.$store.state.user)
          return ' ' + this.$store.state.user.email
        return ''
      }
    },
    methods: {
      logout: function () {
        const jwt= localStorage.getCookie(authTokenName)

        localStorage.setCookie(authTokenName,null)


      },
      change: function () {
        this.btntext = "cancel"
        setTimeout(function () {
          console.log("test")
          this.btntext = "text changed"
        }.bind(this), 1000)},

      onChangeEventHandler(){
        if(toggler.labels == "Login")
        {
          alert('logged in')
        }
        //alert('hi')
      }
    }
  }
</script>

<style>

</style>
