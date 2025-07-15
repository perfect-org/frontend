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
import { ref, watch } from 'vue'
import { useLogin } from '../model/useLogin'
import { useQuestionnaire } from '@/entities/questionnaire/model/useQuestionnaire'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const loading = ref(false)
const formRef = ref()

const { mutate: login, isSuccess } = useLogin()
const onLogin = () => {
  login({ username: email.value, password: password.value })
}

const { questionnaire, isQuestionnaireError, error } = useQuestionnaire()

console.log('[LoginForm] isSuccess:', isSuccess.value)
console.log('[LoginForm] questionnaire:', questionnaire.value)
console.log('[LoginForm] isQuestionnaireError:', isQuestionnaireError.value)
console.log('[LoginForm] error:', error.value)

watch(isSuccess, (success) => {
  if (success) {
    if (questionnaire.value) {
      console.log(questionnaire.value)
      router.replace('/catalog')
    } else {
      console.log(questionnaire.value)
      router.replace('/questionnaire')
    }
  }
})
</script>

<style lang="scss">
@use '@/features/auth/authForm.scss';
</style>
