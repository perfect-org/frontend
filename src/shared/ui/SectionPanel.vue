<template>
  <v-card class="section-card mb-5" elevation="4" rounded="lg">
    <v-card-title class="section-header d-flex align-center justify-space-between">
      <span>{{ title }}</span>
    </v-card-title>
    <v-divider></v-divider>
    <v-row class="section-contents pt-0 mt-2" cols="12">
      <v-col class="section-items-grid pt-0" cols="12">
        <slot name="content"></slot>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <div v-if="isFooter" class="section-footer d-flex justify-end align-center pa-3">
      <slot name="submit"></slot>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
  title: string
  isFooter?: boolean
}>()
</script>

<style scoped lang="scss">
.section-card {
  border-radius: 18px;
  padding: 0;
}
.section-header {
  font-size: 1.15rem;
  font-weight: 600;
  background: #f7f7fa;
  border-radius: 18px 18px 0 0;
  padding: 1rem 1.5rem 0.5rem 1.5rem;
}
.image-container {
  border-radius: 10px 10px 0 0;
}
.product-image {
  border-radius: 10px 10px 0 0;
}
.fallback-image {
  width: 100%;
  height: 220px;
  background: #e0e0e0;
  color: #888;
  font-size: 1.1rem;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.section-status-chip {
  font-weight: 500;
  letter-spacing: 0.5px;
}
.section-contents {
  background: white;
  padding: 0.5rem 1.5rem 1.5rem 1.5rem;
}
.section-option-container {
  margin-bottom: 0.5rem;
  .order-option {
    font-weight: bold;
  }
}
.section-items-grid {
  display: flex;
  justify-items: start;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
.section-item-card {
  background: #fafaff;
  border-radius: 20px !important;
  display: flex;
  flex-direction: column;
  min-width: 220px;
  box-shadow:
    0 4px 24px 0 rgba(60, 120, 80, 0.08),
    0 1.5px 4px 0 rgba(60, 120, 80, 0.04) !important;
  margin-bottom: 24px;
  transition:
    box-shadow 0.2s,
    background 0.2s;
  border: 1px solid rgb(209, 248, 209);
  &:hover {
    box-shadow:
      0 8px 32px 0 rgba(60, 120, 80, 0.14),
      0 2px 8px 0 rgba(60, 120, 80, 0.08);
    background: #f4f8f6;
  }
}
.image-container {
  position: relative;
  overflow: hidden;
  background-color: #f5f5f5;
  width: 100%;
}
.section-item-title {
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  text-align: left;
}
.section-item-qty {
  font-size: 0.85rem;
  color: #888;
}
.section-item-price {
  font-size: 0.95rem;
  color: #388e3c;
  font-weight: 500;
  margin-top: 0.25rem;
}
.section-footer {
  background: #f7f7fa;
  border-radius: 0 0 18px 18px;
  font-size: 1.1rem;
  font-weight: 600;
  padding-right: 1.5rem !important;
}
.section-total-label {
  color: #888;
  margin-right: 0.25rem;
}
.section-total-amount {
  color: #3a3a5a;
  font-size: 1.15rem;
}
</style>
