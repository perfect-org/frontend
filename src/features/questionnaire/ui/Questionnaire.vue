<template>
  <v-card class="pa-6 d-flex flex-column" elevation="8" rounded="xl">
    <v-card-title class="text-center font-weight-bold mb-4"> Начальная анкета </v-card-title>
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
  </v-card>
</template>

<script setup lang="ts">
import { useQuestionnaire } from '../model/useQuestionnaire'
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
} = useQuestionnaire()
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
