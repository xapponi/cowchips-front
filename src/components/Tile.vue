<template>
  <v-btn @click="handleClick" :color="btnColor()">{{this.number}}</v-btn>
</template>

<script>
  export default {
    name: 'Tile',
    props: {
      selected: Array,
      number: Number,
    },
    methods: {
      handleClick() {
        this.$emit('selected', this.number)
      },
      btnColor() {
        return this.selected.includes(this.number) ? 'info' : ''
      }
    },
  }
</script>

<style scoped>

</style>
