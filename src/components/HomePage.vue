<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img
            :src="require('../assets/boo_radley.png')"
            class="my-3"
            contain
            height="100"
        ></v-img>
      </v-flex>

      <v-flex xs12>
        <v-img
            :src="require('../assets/play-cow-patty.jpg')"
            class="my-3"
            contain
            height="400"
        ></v-img>
      </v-flex>


      <v-flex mb-4>
        <div style="text-align: center;">
          <h1 class="display-4 font-weight-thin mb-3" >
            Welcome to the CowChips4Charity event page!
          </h1>

          <p class="subheading font-weight-regular">
            For more information about the Boo Radley Foundation's cause, please visit the foundation's
            <a
                v-for="(boo, i) in booRadleyFoundation"
                :key="i"
                :href="boo.href"
                class="subheading mx-3"
                target="_blank"
            >
              {{ boo.text }}
            </a>
          </p>
        </div>
      </v-flex>

      <v-flex xs12>
        <div style="text-align: center;">
          <v-btn large dark round>Donate</v-btn>
        </div>
      </v-flex>

      <v-flex>
        <div style="text-align: center;">
          <v-btn round>Play</v-btn>
          <v-btn round>Your Tiles</v-btn>
          <v-btn round>Account</v-btn>
          <v-btn round>Log Out</v-btn>
        </div>
      </v-flex>


    </v-layout>
  </v-container>

</template>

<script>
  export default {
    data: () => ({
      booRadleyFoundation: [
        {
          text: 'home page',
          href: 'http://www.booradleyfoundation.org/'
        }
      ]
    })
  }
</script>

<style>

</style>