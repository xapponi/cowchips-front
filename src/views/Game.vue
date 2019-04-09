<template>
  <div>
    <table class="whole">
      <tr :key="row" v-for="row in 6">
        <td :key="col" v-for="col in 6"><tile :number=board[(row-1)+(col-1)+(row-1)*5] :selected="selected" @selected="handleSelected"></tile></td>
      </tr>
    </table>
    <!--<table class="whole">-->
      <!--<tr>-->
        <!--<td style="width: 16%; border-style: solid">1</td>-->
        <!--<td style="width: 16%; border-style: solid">2</td>-->
        <!--<td style="width: 16%; border-style: solid">3</td>-->
        <!--<td style="width: 16%; border-style: solid">4</td>-->
        <!--<td style="width: 16%; border-style: solid">5</td>-->
        <!--<td style="width: 16%; border-style: solid">6</td>-->
      <!--</tr>-->
      <!--<tr>-->
        <!--<td style="width: 16%; border-style: solid">7</td>-->
        <!--<td style="width: 16%; border-style: solid">8</td>-->
        <!--<td style="width: 16%; border-style: solid">9</td>-->
        <!--<td style="width: 16%; border-style: solid">10</td>-->
        <!--<td style="width: 16%; border-style: solid">11</td>-->
        <!--<td style="width: 16%; border-style: solid">12</td>-->
      <!--</tr>-->
      <!--<tr>-->
        <!--<td style="width: 16%; border-style: solid">13</td>-->
        <!--<td style="width: 16%; border-style: solid">14</td>-->
        <!--<td style="width: 16%; border-style: solid">15</td>-->
        <!--<td style="width: 16%; border-style: solid">16</td>-->
        <!--<td style="width: 16%; border-style: solid">17</td>-->
        <!--<td style="width: 16%; border-style: solid">18</td>-->
      <!--</tr>-->
      <!--<tr>-->
        <!--<td style="width: 16%; border-style: solid">19</td>-->
        <!--<td style="width: 16%; border-style: solid">20</td>-->
        <!--<td style="width: 16%; border-style: solid">21</td>-->
        <!--<td style="width: 16%; border-style: solid">22</td>-->
        <!--<td style="width: 16%; border-style: solid">23</td>-->
        <!--<td style="width: 16%; border-style: solid">24</td>-->
      <!--</tr>-->
      <!--<tr>-->
        <!--<td style="width: 16%; border-style: solid">25</td>-->
        <!--<td style="width: 16%; border-style: solid">26</td>-->
        <!--<td style="width: 16%; border-style: solid">27</td>-->
        <!--<td style="width: 16%; border-style: solid">28</td>-->
        <!--<td style="width: 16%; border-style: solid">29</td>-->
        <!--<td style="width: 16%; border-style: solid">30</td>-->
      <!--</tr>-->
      <!--<tr>-->
        <!--<td style="width: 16%; border-style: solid">31</td>-->
        <!--<td style="width: 16%; border-style: solid">32</td>-->
        <!--<td style="width: 16%; border-style: solid">33</td>-->
        <!--<td style="width: 16%; border-style: solid">34</td>-->
        <!--<td style="width: 16%; border-style: solid">35</td>-->
        <!--<td style="width: 16%; border-style: solid">36</td>-->
      <!--</tr>-->
    <!--</table>-->
    <div>total: {{this.amount}}</div>
    <div><v-btn @click="handleSubmit">next</v-btn></div>
  </div>
</template>

<script>
  import path from 'path'
  import axios from 'axios'
  import Tile from '@/components/Tile'
  import localStorageNames from '@/config/localStorageNames'

  export default {
    name: "Game",
    components: {
      Tile
    },
    mounted() {
      this.getGameBoard()
    },
    data() {
      return {
        board: [],
        selected: [],
        price: 0
      }
    },
    methods: {
      getGameBoard() {
        let gameId = this.$localStorage.get(localStorageNames.gameId)
        if(!gameId)
          return

        axios.get(path.join('/game', gameId))
          .then(res => {
            // console.log(res.data)
            this.board = res.data.board
            this.price = res.data.price
          })
          .catch(err => {
            console.log(err)
          })
      },
      handleSelected(number) {
        if (this.selected.includes(number)) {
          this.selected = this.selected.filter(e => e !== number)
        }
        else {
          this.selected.push(number)
        }
      },
      handleSubmit(){
        this.$localStorage.set(localStorageNames.amount, this.amount)
        this.$localStorage.set(localStorageNames.selected, JSON.stringify(this.selected))
        this.$emit('next')
      }
    },
    computed: {
      amount() {
        return this.selected.length * this.price
      }
    }
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
  .whole {
    height: 95%;
    width: 100%;
  }
</style>
