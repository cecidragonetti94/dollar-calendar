<template>
  <v-app>
    <v-app-bar app color="" dark>
      <div class="d-flex align-center">
      
        <v-icon size="40px"> 📅 </v-icon>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/cecidragonetti94/dollar-calendar"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-dialog v-model="loading.status" hide-overlay persistent width="300">
        <v-card :color="loading.color" dark>
          <v-card-text>
            {{loading.title}}
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "App",

  data: () => ({
    //
  }),
  computed:{
    ...mapState(['loading'])
  }
};
</script>
