<template>
  <v-form @submit.prevent="onLogin" ref="formRef" class="authForm">
    <v-text-field
      v-model="email"
      label="Email"
      type="email"
      required
      color="success"
      variant="outlined"
      class="mb-3 text-field"
    />
    <v-text-field
      v-model="password"
      label="Пароль"
      type="password"
      required
      color="success"
      variant="outlined"
      class="mb-4 text-field"
    />
    <v-row class="auth-buttons">
      <v-col cols="12">
        <v-btn
          type="submit"
          color="success"
          block
          class="text-white"
          :loading="loading"
          rounded="sm"
        >
          Войти
        </v-btn>
      </v-col>
      <v-col cols="12">
        <v-btn color="success" block class="text-white" to="/register" rounded="sm">
          Создать аккаунт
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLogin } from '../model/useLogin'
const email = ref('')
const password = ref('')
const loading = ref(false)
const formRef = ref()

const { mutate: login } = useLogin()
const onLogin = () => {
  login({ username: email.value, password: password.value })
}
</script>

<style lang="scss">
@use '@/features/auth/authForm.scss';
</style>
