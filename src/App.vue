<template>
  <v-app>
    <!-- <v-app-bar
      app
      color="primary"
      dark
    > -->
    <AppBar />
      <!-- <v-spacer />
      <v-btn
        text
      >
        <v-icon>mdi-arrow-all</v-icon>
        <span class="ml-1 hidden-sm-and-down">DanceDanceRevolution Scroll Speed Checker</span>
        <span class="ml-1 hidden-md-and-up">DDR Scroll Speed Checker</span>
      </v-btn>
      <v-spacer />
    </v-app-bar> -->

    <v-content>
      <ScrollCalculateForm />
    </v-content>
  </v-app>
</template>

<script>
import ScrollCalculateForm from './components/ScrollCalculateForm.vue';
import AppBar from './components/AppBar.vue';

export default {
  name: 'App',

  components: {
    ScrollCalculateForm,
    AppBar,
  },
};
</script>
