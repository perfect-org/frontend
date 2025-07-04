<script setup lang="ts">
import { RouterView } from 'vue-router'
import { snackbar, snackbarText, snackbarColor } from '@/shared/lib/services/notification.service'
</script>

<template>
  <RouterView />
  <v-snackbar
    v-model="snackbar"
    :color="snackbarColor"
    :timeout="3000"
    location="bottom right"
    transition="slide-y-transition"
  >
    {{ snackbarText }}
    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="snackbar = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<style scoped></style>
