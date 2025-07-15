<template>
  <v-card class="recommendation-sidebar">
    <v-layout>
      <v-navigation-drawer location="left" style="width: 100%" permanent>
        <template v-slot:prepend>
          <v-list-item lines="two" title="Рекомендуем Вам"></v-list-item>
        </template>
        <v-divider></v-divider>
        <v-list density="compact" nav v-if="recommendations" class="pa-0">
          <RecommendationItem
            :recommendation="recommendation"
            v-for="recommendation in recommendations"
          />
          <v-divider></v-divider>
        </v-list>
        <div v-else class="px-4 py-3">Нет персонализированных рекомендаций</div>
      </v-navigation-drawer>
      <v-main style="height: 100vh; padding-left: 0"></v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import RecommendationItem from '@/entities/recommendation/ui/RecommendationItem.vue'
import { useRecommendations } from '@/features/recommendation/model/useRecommendations'

const { recommendations } = useRecommendations()
</script>

<style lang="scss">
.recommendation-sidebar {
  height: 87.5vh;
  border-radius: 18px !important;
  background: #f9fafb;
  border-radius: 18px;
  box-shadow:
    0 4px 24px 0 rgba(60, 120, 80, 0.08),
    0 1.5px 4px 0 rgba(60, 120, 80, 0.04);
  margin-bottom: 24px;
  transition:
    box-shadow 0.2s,
    background 0.2s;
  border: none;
  &:hover {
    box-shadow:
      0 8px 32px 0 rgba(60, 120, 80, 0.14),
      0 2px 8px 0 rgba(60, 120, 80, 0.08);
    background: #f4f8f6;
  }
}
</style>
