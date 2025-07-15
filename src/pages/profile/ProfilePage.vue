<template>
  <h1 class="mb-5">Профиль</h1>
  <v-container fluid class="profile-container pa-0">
    <v-row cols="12" class="profile-page-form-wrapper pa-0">
      <v-col cols="6" class="my-0 ml-0">
        <ProfilePageForm />
      </v-col>
      <v-col cols="6" class="my-0 mr-0">
        <ProfilePageQuestionnaire :questionnaire="questionnaire" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { queryClient } from '@/app/providers/vue-query'
import type { QuestionnaireAnswersObject } from '@/entities/questionnaire/model/types'
import ProfilePageForm from '@/features/profile/ui/ProfilePageForm.vue'
import ProfilePageQuestionnaire from '@/features/profile/ui/ProfilePageQuestionnaire.vue'

const questionnaire = queryClient.getQueryData(['questionnaire']) as QuestionnaireAnswersObject
</script>

<style lang="scss">
.profile-container {
  display: flex;
  flex-direction: column;
  width: 100% !important;
}
.profile-page-form-wrapper {
  width: 100%;
}
</style>
