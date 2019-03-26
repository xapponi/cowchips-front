<template>
  <div>
    <vue-stripe-checkout
        ref="checkoutRef"
        :image="image"
        :name="name"
        :description="description"
        :currency="currency"
        :amount="amount"
        :allow-remember-me="false"
        @done="done"
        @opened="opened"
        @closed="closed"
        @canceled="canceled"
    ></vue-stripe-checkout>
    <button @click="checkout">Checkout</button>
  </div>

</template>

<script>
  import Vue from 'vue'
  import VueStripeCheckout from 'vue-stripe-checkout'
  import axios from 'axios'
  import StepperItem from '@/components/StepperItem'
  import VueLocalStorage from 'vue-localstorage'

  Vue.use(VueLocalStorage)
  Vue.use(VueStripeCheckout, 'pk_test_YCINwBsny5MG5yYQwzwMnD5i')
  export default {
    data() {
      return {
        data:'07/10/1997',
        image: 'https://i.imgur.com/HhqxVCW.jpg',
        name: 'Shut up and take my money!',
        description: 'Donation Payment!',
        currency: 'USD',
        amount: Vue.localStorage.get('amount')*100,
      }
    },
    methods: {
      async checkout () {
        // token - is the token object
        // args - is an object containing the billing and shipping address if enabled
        const { token, args } = await this.$refs.checkoutRef.open()
      },
      done ({token, args}) {
        // token - is the token object
        // args - is an object containing the billing and shipping address if enabled
        // do stuff...
        console.log('done')
        axios.post('/charge', {
          date: this.date,
          token:this.token,
          args:this.args,
        })
          .then(res => {
            this.$router.push('/home')
          })
          .catch(err => {
            this.error = err.response.data.error
          })
      },
      opened () {
        // do stuff
        console.log('opened')
      },
      closed () {
        // do stuff
        console.log('closed')

      },
      canceled () {
        console.log('canceled')
        // do stuff
      }
    }
  }
</script>