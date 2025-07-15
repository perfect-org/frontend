<template>
  <v-card class="pa-6 d-flex flex-column" elevation="8" rounded="xl">
    <v-card-title class="text-center font-weight-bold mb-4"> Начальная анкета </v-card-title>
    <QuestionnaireWizard
      v-if="goals && allergies"
      :goals="goals"
      :allergies="allergies"
      :sendQuestionnaireResults="sendQuestionnaireResults"
    />
    <div v-else>Извините, пока нет данных для анкеты :(</div>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import QuestionnaireWizard from '@/features/questionnaire/ui/QuestionnaireWizard.vue'
import { useQuestionnaire } from '../model/useQuestionnaire'
import type { QuestionnaireAnswersObject } from '../model/types'

const { goals, allergies, sendQuestionnaireResults } = useQuestionnaire()
const props = defineProps<{
  questionnaire: QuestionnaireAnswersObject
}>()
</script>

<style lang="scss"></style>
