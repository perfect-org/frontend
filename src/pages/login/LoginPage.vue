<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="3">
        <transition name="fade">
          <h1 class="vitaminbox-title mb-6">VitaminBox</h1>
        </transition>
        <v-card class="pa-6" elevation="8" rounded="xl">
          <v-card-title class="card-title text-center text-green-darken-2 font-weight-bold mb-4">
            Вход в систему
          </v-card-title>
          <LoginForm />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import LoginForm from '@/features/auth/login/ui/LoginForm.vue'
</script>

<style scoped lang="scss">
@use '@/features/auth/auth.scss';
</style>
