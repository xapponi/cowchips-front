<template>
  <div id="app">
    <v-app id="inspire">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12 shadow">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>My Tiles</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-tooltip bottom>
                    <v-btn
                        icon
                        large
                        to="/account"
                        slot="activator"
                    >
                      <v-icon large>arrow_back</v-icon>
                    </v-btn>
                  </v-tooltip>
                </v-toolbar>
                <v-card-text>

                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'UserTiles',
    data() {
      return {
        donations: [
          {
            date: new Date('2019-04-09 19:00:08.814Z'),
            
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
