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
        organizations: [
          { id: '8f63f352-ed64-41d3-8a64-b3c800cf455d', gameId: '509963b1-83fb-4225-8517-f1c57d2e541c', name: 'Iowa State', abbreviation: 'ISU', photo: 'https://a2.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fncaa%2F500%2F66.png' },
          { id: '1fbb1c64-bd4a-49e5-83c4-d141e151b268', gameId: '29c4ce3f-c857-4c17-8242-726d2cb9c9a2', name: 'Ohio State', abbreviation: 'OU', photo: 'https://cdn.vox-cdn.com/thumbor/j6zdpMvPpnIdKA6XbQf0sTDwcOY=/0x52:500x385/1200x800/filters:focal(0x52:500x385)/cdn.vox-cdn.com/uploads/chorus_image/image/7637953/-8440ec73343f6236.0.jpeg' },
        ],
        imgErrors: []
      }
    },
    methods: {
      getOrganizations() {
        // axios.get('/organizations/active')
        //   .then(res => {
        //     this.organizations = res.data
        //     console.log(this.organizations)
        //   })
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
