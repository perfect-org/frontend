<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer location="left" style="width: 100%" permanent>
        <template v-slot:prepend>
          <v-list-item lines="two" title="Список рекомендаций"></v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list density="compact" nav v-if="recommendations">
          <RecommendationItem v-for="recommendation in recommendations" />
        </v-list>

        <div v-else class="px-4 py-3">Нет персонализированных рекомендаций</div>
      </v-navigation-drawer>
      <v-main style="height: 250px; padding-left: 0"></v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import RecommendationItem from '@/entities/recommendation/ui/RecommendationItem.vue'
import { useRecommendations } from '@/features/recommendation/model/useRecommendations'

const { recommendations } = useRecommendations()
</script>

<style lang="scss"></style>
