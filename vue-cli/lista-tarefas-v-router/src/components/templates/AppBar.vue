<template>
  <v-app-bar app color="primary" dark elevation="0">
    <v-app-bar-nav-icon
      @click.stop="$emit('toggleSidebarMenu')"
    ></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-btn @click="toggleTheme" color="primary" class="mr-2">{{
      buttonText
    }}</v-btn>
    <v-icon>mdi-account</v-icon>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    buttonText() {
      return !this.$vuetify.theme.dark ? "Go Dark" : "Go Light";
    },
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style>
</style>