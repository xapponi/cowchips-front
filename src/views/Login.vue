<template>
  <v-container>
    <span>Login Page!</span>
    <v-text-field id="email" placeholder="Email" v-model="email" browser-autocomplete="off"></v-text-field>
    <v-text-field id="password" :type="'password'" placeholder="Password" v-model="password"></v-text-field>
    <v-btn id="submit" @click="submit">Login</v-btn>
  </v-container>
</template>

<script>
  // TODO make this page nice looking
  // TODO add facebook oauth: https://github.com/phanan/vue-facebook-signin-button
  // TODO password and email validation onsubmit -> error message if wrong
  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      submit() {
        const loginInfo = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('login', loginInfo)
      }
    }
  }
</script>

<style scoped>

</style>
