<template>
  <b-container class="bv-example-row">

    <b-row class="justify-content-center">
      <table>
        <tr>

          <td><b-button :pressed.sync="myToggle" @click="count" variant="primary"   type="number" v-model="board[0]" :min="1" :max="36">{{board[0]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle1" @click="count1" variant="primary"   type="number" v-model="board[1]" :min="1" :max="36">{{board[1]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle2" @click="count2" variant="primary"   type="number" v-model="board[2]" :min="1" :max="36">{{board[2]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle3" @click="count3" variant="primary"   type="number" v-model="board[3]" :min="1" :max="36">{{board[3]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle4" @click="count4" variant="primary"   type="number" v-model="board[4]" :min="1" :max="36">{{board[4]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle5" @click="count5" variant="primary"   type="number" v-model="board[5]" :min="1" :max="36">{{board[5]}} </b-button></td>
        </tr>
        <tr>
          <td><b-button :pressed.sync="myToggle6" @click="count6" variant="primary"   type="number" v-model="board[6]" :min="1" :max="36">{{board[6]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle7" @click="count7" variant="primary"   type="number" v-model="board[7]" :min="1" :max="36">{{board[7]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle8" @click="count8" variant="primary"   type="number" v-model="board[8]" :min="1" :max="36">{{board[8]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle9" @click="count9" variant="primary"   type="number" v-model="board[9]" :min="1" :max="36">{{board[9]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle10" @click="count10" variant="primary"   type="number" v-model="board[10]" :min="1" :max="36">{{board[10]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle11" @click="count11" variant="primary"   type="number" v-model="board[11]" :min="1" :max="36">{{board[11]}} </b-button></td>
        </tr>
        <tr>
          <td><b-button :pressed.sync="myToggle12" @click="count12" variant="primary"   type="number" v-model="board[12]" :min="1" :max="36">{{board[12]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle13" @click="count13" variant="primary"   type="number" v-model="board[13]" :min="1" :max="36">{{board[13]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle14" @click="count14" variant="primary"   type="number" v-model="board[14]" :min="1" :max="36">{{board[14]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle15" @click="count15" variant="primary"  type="number" v-model="board[15]" :min="1" :max="36">{{board[15]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle16" @click="count16" variant="primary"   type="number" v-model="board[16]" :min="1" :max="36">{{board[16]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle17" @click="count17" variant="primary"   type="number" v-model="board[17]" :min="1" :max="36">{{board[17]}} </b-button></td>
        </tr>
        <tr>
          <td><b-button :pressed.sync="myToggle18" @click="count18" variant="primary"   type="number" v-model="board[18]" :min="1" :max="36">{{board[18]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle19" @click="count19" variant="primary"   type="number" v-model="board[19]" :min="1" :max="36">{{board[19]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle20" @click="count20" variant="primary"   type="number" v-model="board[20]" :min="1" :max="36">{{board[20]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle21" @click="count21" variant="primary"   type="number" v-model="board[21]" :min="1" :max="36">{{board[21]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle22" @click="count22" variant="primary"   type="number" v-model="board[22]" :min="1" :max="36">{{board[22]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle23" @click="count23" variant="primary"   type="number" v-model="board[23]" :min="1" :max="36">{{board[23]}} </b-button></td>
        </tr>
        <tr>
          <td><b-button :pressed.sync="myToggle24" @click="count24" variant="primary"   type="number" v-model="board[24]" :min="1" :max="36">{{board[24]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle25" @click="count25" variant="primary"   type="number" v-model="board[25]" :min="1" :max="36">{{board[25]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle26" @click="count26" variant="primary"   type="number" v-model="board[26]" :min="1" :max="36">{{board[26]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle27" @click="count27" variant="primary"   type="number" v-model="board[27]" :min="1" :max="36">{{board[27]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle28" @click="count28" variant="primary"   type="number" v-model="board[28]" :min="1" :max="36">{{board[28]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle29" @click="count29" variant="primary"   type="number" v-model="board[29]" :min="1" :max="36">{{board[29]}} </b-button></td>
        </tr>
        <tr>
          <td><b-button :pressed.sync="myToggle30" @click="count30" variant="primary"   type="number" v-model="board[30]" :min="1" :max="36">{{board[30]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle31" @click="count31" variant="primary"   type="number" v-model="board[31]" :min="1" :max="36">{{board[31]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle32" @click="count32" variant="primary"   type="number" v-model="board[32]" :min="1" :max="36">{{board[32]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle33" @click="count33" variant="primary"   type="number" v-model="board[33]" :min="1" :max="36">{{board[33]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle34" @click="count34" variant="primary"   type="number" v-model="board[34]" :min="1" :max="36">{{board[34]}} </b-button></td>
          <td><b-button :pressed.sync="myToggle35" @click="count35" variant="primary"   type="number" v-model="board[35]" :min="1" :max="36">{{board[35]}} </b-button></td>
        </tr>
      </table>
    </b-row>
    <b-row>
      <p> {{duplicateError}} </p>
    </b-row>
    <b-row>
      <p> {{invalidInputError}} </p>
    </b-row>
    <b-row>
      <b-button variant="primary" @click.prevent="handleSubmit">Submit</b-button>
    </b-row>

    <v-text-field id="amounts"  placeholder="amount" v-model="amount">{{amount}}</v-text-field>

  </b-container>


</template>

<script>
  import Vue from 'vue'
  import BootstrapVue from 'bootstrap-vue'
  import VueLocalStorage from 'vue-localstorage'

  Vue.use(VueLocalStorage)
  Vue.use(BootstrapVue)
  import BContainer from 'bootstrap-vue/es/components/layout/container'
  Vue.component('b-container', BContainer)
  import path from 'path'
  import axios from 'axios'



  export default {
    name: "Game",
    //components: {BRow},
    created() {
      this.$forceUpdate()
      this.getGameBoard()
    },
    data() {
      return {
        counts: 0,
        amount:0,
        amounts:20,
        myToggle: false,
        myToggle1: false,
        myToggle2: false,
        myToggle3: false,
        myToggle4: false,
        myToggle5: false,
        myToggle6: false,
        myToggle7: false,
        myToggle8: false,
        myToggle9: false,
        myToggle10: false,
        myToggle11: false,
        myToggle12: false,
        myToggle13: false,
        myToggle14: false,
        myToggle15: false,
        myToggle16: false,
        myToggle17: false,
        myToggle18: false,
        myToggle19: false,
        myToggle20: false,
        myToggle21: false,
        myToggle22: false,
        myToggle23: false,
        myToggle24: false,
        myToggle25: false,
        myToggle26: false,
        myToggle27: false,
        myToggle28: false,
        myToggle29: false,
        myToggle30: false,
        myToggle31: false,
        myToggle32: false,
        myToggle33: false,
        myToggle34: false,
        myToggle35: false,
        myToggle36: false,

        board: [],
        duplicateError: null,
        invalidInputError: null,
      }
    },
    computed: {
      btnStates() {
        return this.buttons.map(btn => btn.state)
      }
    },
    methods: {
      back() {
        this.$router.push('/games')
      },
      getGameBoard() {
        let s = this.$store.state.gameId

        let j = Vue.localStorage.get('gamesID')
        console.log("s : " + s)
        //this.$forceUpdate()
        axios.get(path.join('/game', j))
          .then(res => {
            console.log(this.$route.params.id)
            console.log(res.data.board)
              this.board = res.data.board

            this.duplicateError = ""
            this.invalidInputError = ""
            this.$forceUpdate()
          })
          .catch(err => {
            console.log(err)
          })
      },
      count(){
        if(this.myToggle == true) {
          this.counts++
          console.log(this.counts)
        }
        if(this.myToggle==false){
          this.counts--
          console.log(this.counts)
        }
        this.amount = this.amounts * this.counts
        console.log(this.amount)
      },
      count1(){
        if(this.myToggle1 == true) {
          this.counts++
        }
        if(this.myToggle1==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count2(){
        if(this.myToggle2 == true) {
          this.counts++
        }
        if(this.myToggle2==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count3(){
        if(this.myToggle3 == true) {
          this.counts++
        }
        if(this.myToggle3==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count4(){
        if(this.myToggle4 == true) {
          this.counts++
        }
        if(this.myToggle4==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count5(){
        if(this.myToggle5 == true) {
          this.counts++
        }
        if(this.myToggle5==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count6(){
        if(this.myToggle6 == true) {
          this.counts++
        }
        if(this.myToggle6==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count7(){
        if(this.myToggle7 == true) {
          this.counts++
        }
        if(this.myToggle7==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count8(){
        if(this.myToggle8 == true) {
          this.counts++
        }
        if(this.myToggle8==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count9(){
        if(this.myToggle9 == true) {
          this.counts++
        }
        if(this.myToggle9==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count10(){
        if(this.myToggle10 == true) {
          this.counts++
        }
        if(this.myToggle10==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count11(){
        if(this.myToggle11 == true) {
          this.counts++
        }
        if(this.myToggle11==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count12(){
        if(this.myToggle12 == true) {
          this.counts++
        }
        if(this.myToggle12==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count13(){
        if(this.myToggle13 == true) {
          this.counts++
        }
        if(this.myToggle13 ==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count14(){
        if(this.myToggle14 == true) {
          this.counts++
        }
        if(this.myToggle14 ==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count15(){
        if(this.myToggle15 == true) {
          this.counts++
        }
        if(this.myToggle15 ==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count16(){
        if(this.myToggle16 == true) {
          this.counts++
        }
        if(this.myToggle16 ==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count17(){
        if(this.myToggle17 == true) {
          this.counts++
        }
        if(this.myToggle17==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count18(){
        if(this.myToggle18 == true) {
          this.counts++
        }
        if(this.myToggle18==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count19(){
        if(this.myToggle19 == true) {
          this.counts++
        }
        if(this.myToggle19==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count20(){
        if(this.myToggle20 == true) {
          this.counts++
        }
        if(this.myToggle20==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count21(){
        if(this.myToggle21 == true) {
          this.counts++
        }
        if(this.myToggle21==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count22(){
        if(this.myToggle22 == true) {
          this.counts++
        }
        if(this.myToggle22==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count23(){
        if(this.myToggle23 == true) {
          this.counts++
        }
        if(this.myToggle23==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count24(){
        if(this.myToggle24 == true) {
          this.counts++
        }
        if(this.myToggle24==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count25(){
        if(this.myToggle25 == true) {
          this.counts++
        }
        if(this.myToggle25==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count26(){
        if(this.myToggle26 == true) {
          this.counts++
        }
        if(this.myToggle26==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count27(){
        if(this.myToggle27 == true) {
          this.counts++
        }
        if(this.myToggle27==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count28(){
        if(this.myToggle28 == true) {
          this.counts++
        }
        if(this.myToggle28==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count29(){
        if(this.myToggle29 == true) {
          this.counts++
        }
        if(this.myToggle29==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count30(){
        if(this.myToggle30 == true) {
          this.counts++
        }
        if(this.myToggle30==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count31(){
        if(this.myToggle31 == true) {
          this.counts++
        }
        if(this.myToggle31==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count32(){
        if(this.myToggle32 == true) {
          this.counts++
        }
        if(this.myToggle32==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count33(){
        if(this.myToggle33 == true) {
          this.counts++
        }
        if(this.myToggle33==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count34(){
        if(this.myToggle34 == true) {
          this.counts++
        }
        if(this.myToggle34==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      count35(){
        if(this.myToggle35 == true) {
          this.counts++
        }
        if(this.myToggle35==false){
          this.counts--
        }
        this.amount = this.counts * this.amounts
      },
      handleSubmit(){
        Vue.localStorage.set('amount', this.amount)
        console.log('this amount' + Vue.localStorage.get('amount'))

      }
    },

  }
</script>

<style scoped>
  td {
    text-align: center;
    width: 5em;
    padding-bottom: 5px;
    padding-right: 5px;
    padding-left: 5px;
  }
  table {
    margin-top: 20px;
  }
</style>
