<template>
  <v-container>
    <v-layout align-center justify-center row fill-height wrap>
      <v-flex xs12 md6>
        <credit-card
            :number="cardNumber"
            :name="name"
            :exp="expiration"
        ></credit-card>
      </v-flex>
      <v-flex xs12 md6>
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
          <v-btn color="success" @click="submit">Submit</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import CreditCard from '@/components/CreditCard'
  import { mask } from "vue-the-mask";

  export default {
    directives: { mask },
    name: 'Donation',
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
    components: {
      CreditCard
    },
    methods: {
      submit() {
        console.log('submit!')
      }
    }
  }
</script>

<style>
  img {
    padding-bottom: 2em;
  }
</style>
