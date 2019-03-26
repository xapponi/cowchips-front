<template>
  <v-stepper :value="step">
    <v-stepper-header>
      <v-stepper-step :complete="step > 1" step="1">Org Select</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="step > 2" step="2">Tile Selection</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3">Donation</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <stepper-item step="1" disallowBack disallowNext>
        <organizations @next="upStep"></organizations>
      </stepper-item>

      <stepper-item step="2" @next="upStep" @back="downStep">
        <game></game>
      </stepper-item>

      <stepper-item step="3" @next="upStep" @back="downStep" disallowNext>
        <donation></donation>
      </stepper-item>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
  import Organizations from './Organizations'
  import Donation from './Donation'
  import Game from './Game'
  import StepperItem from '@/components/StepperItem'

  export default {
    name: 'Layout',
    components: {
      StepperItem,
      Organizations,
      Donation,
      Game
    },
    data() {
      return {
        step: 1
      }
    },
    computed: {
    },
    methods: {
      upStep() {
        this.step++
      },
      downStep() {
        this.step--
      }
    }
  }
</script>

<style scoped>

</style>
