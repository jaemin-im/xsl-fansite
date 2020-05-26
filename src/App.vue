<template>
  <v-app>
    <AppBar />
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
