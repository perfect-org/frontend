<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="3">
        <Questionnaire />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import Questionnaire from '@/features/questionnaire/ui/Questionnaire.vue'
</script>

<style lang="scss"></style>
