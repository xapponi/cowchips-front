<template>
  <div>
    <h1>Select an organization to support</h1>
    <v-list>
      <template v-for="org in this.organizations">
        <v-list-tile
            avatar
            @click="handleTeamSelection(org.id)"
            :key="org.id"
        >
          <v-list-tile-avatar>
            <img :src="org.photo" onerror="this.style.display='none'" @error="registerImgError(org.id)">
            <span v-if="hasImgError(org.id)">{{org.abbreviation}}</span>
          </v-list-tile-avatar>
          <v-list-tile-content>{{org.name}}</v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Organizations',
    created() {
      this.getOrganizations()
    },
    data() {
      return {
        organizations: [],
        imgErrors: []
      }
    },
    methods: {
      getOrganizations() {
        axios.get('/game/active')
          .then(res => {
            const games = res.data
            games.forEach(game => {
              game.organizations.forEach(org => {
                this.organizations.push(org)
              })
            })
          })
      },
      handleTeamSelection(id) {
        const orgRecord = this.organizations.find((org) => org.id === id)
        this.$store.commit('setGameId', orgRecord.gameId)
        this.$store.commit('setOrgId', orgRecord.id)
        this.$emit('next')
      },
      hasImgError(id) {
        return this.imgErrors.includes(id)
      },
      registerImgError(id) {
        this.imgErrors.push(id)
      }
    },
  }
</script>

<style scoped>

</style>
