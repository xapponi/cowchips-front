<template>
  <v-container>

    <v-flex xs12>

      <v-btn large dark round to="/home">Home</v-btn>

    </v-flex>




    <form>
      <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              :counter="20"
              label="Name"
              id = "name"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
              v-model="phone"
              :error-messages="phoneErrors"
              label="Phone number"
              id = "phone number"
              required
              @input="$v.phone.$touch()"
              @blur="$v.phone.$touch()"
      ></v-text-field>
      <v-text-field
              v-model="pass"
              :error-messages="passErrors"
              label="Password"
              id = "password"
              required
              @input="$v.pass.$touch()"
              @blur="$v.pass.$touch()"
      ></v-text-field>
      <v-text-field
              v-model="pass2"
              :error-messages="pass2Errors"
              label="Re-enter password"
              id = "pass2"
              required
              @input="$v.pass2.$touch()"
              @blur="$v.pass2.$touch()"
      ></v-text-field>

      <v-btn id="submit" @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>


  </v-container>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email, minLength, sameAs} from 'vuelidate/lib/validators'
  import { authTokenName} from '@/config/auth'
  import axios from 'axios'
  import localStorage from '@/helpers/localStorage'

  export default {
    name: 'Account',
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(20) },
      // email: { required, email },
      phone: {required, maxLength: maxLength(10)},
      pass: {required, minLength: minLength(6)},
      pass2: {required, minLength: minLength(6), sameAsPassword: sameAs('pass')}



    },

    data: () => ({
      name: '',
      phone: '',
      pass: '',
      pass2: '',
      id:''
    }),

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      phoneErrors () {
        const errors = []
        if (!this.$v.phone.$dirty) return errors
        !this.$v.phone.maxLength && errors.push('Enter a valid phone number')
        !this.$v.phone.required && errors.push('Phone is required.')
        return errors
      },
      passErrors () {
        const errors = []
        if (!this.$v.pass.$dirty) return errors
        !this.$v.pass.minLength && errors.push('Password must be at least 6 characters long')
        !this.$v.pass.required && errors.push('Password is required.')
        return errors
      },
      pass2Errors () {
        const errors = []
        if (!this.$v.pass2.$dirty) return errors
        !this.$v.pass2.minLength && errors.push('Password must be at least 6 characters long')
        !this.$v.pass2.required && errors.push('Password is required.')
        !this.$v.pass2.sameAsPassword && errors.push('The passwords entered do not match')
        return errors
      },
    },


    methods: {
      start: function () {
        axios.get('/account')
          .then(res => {
            console.log(res)
            this.name=res.data.name
            this.phone = res.data.phone.replace('-','')
            this.phone = this.phone.replace('(','')
            this.phone = this.phone.replace(')','')
            this.phone = this.phone.replace(' ','')
            this.id= res.data.id
          })
          .catch( error => {

          })
      },
      submit () {
        axios.put('/account', {
          phone: this.phone,
          password:this.pass,
          name: this.name
        })
          .then(res => {
            console.log(res)
            const token = res.data.token
            localStorage.setCookie(authTokenName, token)
            this.$router.push('/home')
          })
          .catch(err => {
            this.error = err.response.data.error
          })
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        //this.email = ''
        this.phone = ''
        this.pass = ''
        this.pass2 = ''
      }
    },
    created() {
      this.start()
    }
  }
</script>

<style scoped>

</style>
