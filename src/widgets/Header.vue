<template class="header">
  <v-app-bar :elevation="2" color="success">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>VitaminBox</v-app-bar-title>

    <v-btn icon>
      <v-icon>mdi-cart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-shield-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.header {
  position: fixed;
}
</style>
