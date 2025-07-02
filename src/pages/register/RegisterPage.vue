<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="3">
        <transition name="fade">
          <h1 class="vitaminbox-title mb-6">VitaminBox</h1>
        </transition>
        <v-card class="pa-6" elevation="8" rounded="xl">
          <v-card-title class="card-title text-center text-green-darken-2 font-weight-bold mb-4">
            Регистрация
          </v-card-title>
          <RegisterForm />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import RegisterForm from '@/features/auth/register/ui/RegisterForm.vue'

const email = ref('')
const password = ref('')

function onLogin() {
  // TODO: добавить логику авторизации
  alert(`Логин: ${email.value}\nПароль: ${password.value}`)
}
</script>

<style lang="scss">
@use '@/features/auth/auth.scss';
</style>
