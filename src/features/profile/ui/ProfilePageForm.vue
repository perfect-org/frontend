<template>
  <SectionPanel :title="`Основная информация`">
    <template #content>
      <v-form fast-fail @submit.prevent class="profile-form">
        <v-row cols="12" class="pa-0">
          <v-col cols="4">
            <v-text-field
              v-model="userFormData.name"
              label="Имя в системе"
              class="form-text-field"
            ></v-text-field>
          </v-col>
          <v-col cols="4" class="pl-0">
            <v-text-field
              v-model="userFormData.email"
              label="Электронная почта"
              class="form-text-field"
            ></v-text-field>
          </v-col>
          <v-col cols="4" class="pl-0">
            <v-text-field
              v-model="userFormData.role"
              label="Роль"
              class="form-text-field"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row cols="12" class="pa-0">
          <v-col cols="6" class="pt-0">
            <v-text-field v-model="password" label="Пароль" class="form-text-field"></v-text-field>
          </v-col>
          <v-col cols="6" class="pl-0 pt-0">
            <v-text-field
              v-model="confirmPassword"
              label="Подтвердите пароль"
              class="form-text-field"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn class="mt-2" type="submit" color="success" block>Сохранить изменения</v-btn>
      </v-form>
    </template>
  </SectionPanel>
</template>

<script setup lang="ts">
import { cookiesApi } from '@/shared/lib/helpers/cookies'
import { reactive, ref } from 'vue'
import SectionPanel from '@/shared/ui/SectionPanel.vue'

const user = cookiesApi.getUser()
const userFormData = reactive(user)
const password = ref('')
const confirmPassword = ref('')
</script>

<style scoped lang="scss">
.form-text-field {
  .v-input__details {
    display: none !important;
  }
}
.profile-form {
  width: 100%;
}
</style>
