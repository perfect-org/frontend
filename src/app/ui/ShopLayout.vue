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
  height: 100%;
  margin-top: 64px;
  padding: 2rem;
  background-color: rgb(238, 248, 240);
  display: flex;
  flex-direction: column;
}
</style>
