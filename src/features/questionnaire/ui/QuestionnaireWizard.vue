<template>
  <div class="question-wrapper">
    <v-progress-linear :value="progress" height="7" color="green-darken-2" class="mb-4" rounded />
    <transition :name="`slide-${slideDirection}`" mode="out-in">
      <div v-if="currentQuestion" :key="currentIndex">
        <div class="mb-4">
          <span class="font-weight-medium">{{ currentQuestion.label }}</span>
        </div>
        <template v-if="currentQuestion.type === 'checkbox'">
          <v-radio-group
            v-model="answers[currentQuestion.key]"
            :inline="true"
            :required="currentQuestion.required"
            class="radio-group"
          >
            <v-radio label="Да" :value="true" color="success" />
            <v-radio label="Нет" :value="false" color="success" />
          </v-radio-group>
        </template>
        <template v-else>
          <component
            :is="getComponent(currentQuestion.type)"
            v-model="answers[currentQuestion.key]"
            v-bind="getComponentProps(currentQuestion)"
          />
        </template>
      </div>
    </transition>
    <v-card-actions class="justify-space-between mt-3">
      <v-btn @click="prevQuestion" :disabled="currentIndex === 0" variant="tonal">Назад</v-btn>
      <v-btn
        @click="nextQuestion"
        :disabled="!canProceed || !isRadioChecked"
        color="green-darken-2"
        >{{ isLast ? 'Завершить' : 'Далее' }}</v-btn
      >
    </v-card-actions>
  </div>
</template>

<script setup lang="ts">
import { defineProps, type Ref } from 'vue'
import { useQuestionnaireWizard } from '../model/useQuestionnaireWizard'
import type { QuestionnaireAnswersObject } from '@/entities/questionnaire/model/types'

const props = defineProps<{
  goals: Ref<any, any> | Ref<undefined, undefined>
  allergies: Ref<any, any> | Ref<undefined, undefined>
  sendQuestionnaireResults: MutateSyncFunction<any, Error, QuestionnaireAnswersObject, unknown>
}>()

const { goals, allergies, sendQuestionnaireResults } = props

const {
  currentIndex,
  answers,
  slideDirection,
  currentQuestion,
  isLast,
  progress,
  isRadioChecked,
  canProceed,
  nextQuestion,
  prevQuestion,
  getComponent,
  getComponentProps,
} = useQuestionnaireWizard({ goals, allergies, sendQuestionnaireResults })
</script>

<style scoped lang="scss">
@use '@/shared/styles/animations';
.v-card {
  min-height: 350px;
}
.radio-group {
  width: 100%;
}
.question-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}
</style>
