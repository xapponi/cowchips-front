<template>
  <!--<v-btn @click="handleClick" :color="btnColor()">{{this.number}}</v-btn>-->
  <td :style="btnColor()" @click="handleClick">{{this.number}}</td>
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
        return this.selected.includes(this.number) ? 'background-color: blue;' : ''
      }
    },
  }
</script>

<style scoped>
  td {
    width: 16%;
    border-style: solid
  }
</style>
