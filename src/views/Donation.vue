<template>
  <v-form id="donation-form" @keyup.enter.native="submit" class="mb-4">
    <v-text-field
        label="Credit Card Number"
        v-model="cardNumber"
        v-mask="'#### #### #### ####'"
        solo
    ></v-text-field>
    <v-text-field
        label="Name"
        v-model="name"
        solo
    ></v-text-field>
    <v-text-field
        label="CCV"
        v-model="CCV"
        v-mask="'####'"
        solo
    ></v-text-field>
    <v-text-field
        v-model="expiration"
        label="Expiration Date"
        v-mask="'##/##'"
        solo
    ></v-text-field>
    <v-text-field
        v-model="zip"
        label="Zip Code"
        v-mask="'#####'"
        solo
    ></v-text-field>
  </v-form>
</template>

<script>
  import { mask } from "vue-the-mask"

  export default {
    directives: { mask },
    name: 'Donation',
    components: {
    },
    data () {
      return {
        cardNumber: '',
        CCV: '',
        expiration: '',
        name: '',
        amount: '',
        zip: ''
      }
    },
    methods: {
    }
  }
</script>

<style>
  img {
    padding-bottom: 2em;
  }
</style>
