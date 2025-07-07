<template class="header">
  <v-app-bar :elevation="2" color="success">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-app-bar-title>VitaminBox</v-app-bar-title>
    <CartPreviewMenu />
    <v-btn icon :to="{ path: 'admin' }" exact>
      <v-icon>mdi-shield-account</v-icon>
    </v-btn>
    <v-btn icon :to="{ path: 'profile' }" exact>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
  <ProfileDrawer :drawer="drawer" @update:drawer="drawer = $event" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CartPreviewMenu from '@/features/cart/ui/CartPreviewMenu.vue'
import ProfileDrawer from '@/features/profile/ui/ProfileDrawer.vue'
const drawer = ref(false)
</script>

<style lang="scss">
.header {
  position: fixed;
}
</style>
