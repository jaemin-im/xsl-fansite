<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon v-on:click.stop="drawer = !drawer" />
      <v-spacer />
      <v-btn text link to="/">
        <v-icon>mdi-arrow-all</v-icon>
        <span class="ml-1 hidden-sm-and-down">DanceDanceRevolution XSOLUTE. Fansite</span>
        <span class="ml-1 hidden-md-and-up">DDR XSL. Fansite</span>
      </v-btn>
      <v-spacer />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute disable-resize-watcher>
      <v-list dense>
        <template v-for="menu in menus">
          <v-list-item :key="menu.menuName" route :to="menu.route">
            <v-list-item-action>
              <v-icon>{{ menu.menuIcon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ menu.menuName }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import * as menus from '../menus.json';

export default {
  computed: {
    dialog() {
      return this.$store.dialog;
    },
  },
  data: () => ({
    drawer: null,
    menus: menus.default.menus,
  }),
};
</script>

<style lang="scss" scoped>
.v-navigation-drawer {
  padding-top: 4rem;
}
</style>
