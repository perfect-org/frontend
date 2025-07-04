<template>
  <v-app>
    <Header />
    <main class="main">
      <RouterView />
    </main>
  </v-app>
</template>

<script setup lang="ts">
import Header from '@/widgets/Header.vue'
import { RouterView } from 'vue-router'
</script>

<style lang="scss">
.main {
  height: calc(100vh - 64px);
  margin-top: 64px;
  padding: 2rem;
}
</style>
