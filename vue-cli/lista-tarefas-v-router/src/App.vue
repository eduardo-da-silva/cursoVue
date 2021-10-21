<template>
  <v-app>
    <!-- <app-bar @toggleSidebarMenu="sidebarMenu = !sidebarMenu" />
    <side-bar
      @toggleSidebarMenu="sidebarMenu = !sidebarMenu"
      :sidebarMenu="sidebarMenu"
    />
    <v-main> -->
    <!-- <v-container class="pa-8" fluid> -->
    <!-- <v-row class="fill-height"> -->
    <!-- <v-col> -->
    <!-- <transition name="fade"> -->
    <router-view></router-view>
    <!-- </transition> -->
    <!-- </v-col> -->
    <!-- </v-row> -->
    <!-- </v-container> -->
    <!-- </v-main>
    <foot-bar /> -->
  </v-app>
</template>

<script>
// import AppBar from "@/components/templates/AppBar";
// import SideBar from "@/components/templates/SideBar";
// import FootBar from "@/components/templates/FootBar";
export default {
  // components: { AppBar, SideBar, FootBar },

  data: () => ({
    sidebarMenu: true,
  }),
};
</script>


<style>
/* .fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
} */

/*.theme--light.v-application ::-webkit-scrollbar {
  width: 13px;
}

.theme--light.v-application ::-webkit-scrollbar-track {
  background: #e6e6e6;
  border-left: 1px solid #dadada;
}

.theme--light.v-application ::-webkit-scrollbar-thumb {
  background: #b0b0b0;
  border: solid 3px #e6e6e6;
  border-radius: 7px;
}

.theme--light.v-application ::-webkit-scrollbar-thumb:hover {
  background: black;
}

.theme--dark.v-application ::-webkit-scrollbar {
  width: 13px;
}

.theme--dark.v-application ::-webkit-scrollbar-track {
  background: #202020;
  border-left: 1px solid #2c2c2c;
}

.theme--dark.v-application ::-webkit-scrollbar-thumb {
  background: #3e3e3e;
  border: solid 3px #202020;
  border-radius: 7px;
}

.theme--dark.v-application ::-webkit-scrollbar-thumb:hover {
  background: white;
} */
</style>