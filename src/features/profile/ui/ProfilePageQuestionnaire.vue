<template>
  <SectionPanel :title="`Анкета`">
    <template #content>
      <QuestionnaireWizard
        v-if="goals && allergies"
        :goals="goals"
        :allergies="allergies"
        :sendQuestionnaireResults="sendQuestionnaireResults"
        :userAnswers="questionnaire"
      />
    </template>
  </SectionPanel>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { QuestionnaireAnswersObject } from '@/entities/questionnaire/model/types'
import SectionPanel from '@/shared/ui/SectionPanel.vue'
import { useQuestionnaire } from '@/entities/questionnaire/model/useQuestionnaire'
import QuestionnaireWizard from '@/features/questionnaire/ui/QuestionnaireWizard.vue'

defineProps<{
  questionnaire: QuestionnaireAnswersObject
}>()
const { goals, allergies, sendQuestionnaireResults, questionnaire } = useQuestionnaire()
</script>
