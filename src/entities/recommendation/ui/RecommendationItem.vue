<template>
  <v-card :key="recommendation.id" class="cart-item" flat>
    <ProductLink :productId="recommendation.id">
      <div class="cart-item-photo-container">
        <ProductImage :image_url="recommendation.image_url" />
      </div>
    </ProductLink>
    <div class="cart-item-content">
      <div class="cart-item-title-row mb-2">
        <ProductLink :productId="recommendation.id">
          <span class="cart-item-title">{{ recommendation.name }}</span>
        </ProductLink>
        <span class="cart-item-price">{{ recommendation.price }} руб.</span>
      </div>
      <v-divider></v-divider>
      <TagList
        :product="recommendation"
        :className="`ma-0 d-flex align-center`"
        :labelClassName="`ma-0 mr-2`"
      ></TagList>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import type { Product } from '@/entities/product/model/types'
import ProductImage from '@/shared/ui/ProductImage.vue'
import ProductLink from '@/shared/ui/ProductLink.vue'
import TagList from '@/widgets/TagList.vue'
import { defineProps } from 'vue'

defineProps<{
  recommendation: Product
}>()
</script>

<style scoped lang="scss">
.cart-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f9fafb;
  box-shadow:
    0 4px 24px 0 rgba(60, 120, 80, 0.08),
    0 1.5px 4px 0 rgba(60, 120, 80, 0.04);
  padding: 20px 28px;
  transition:
    box-shadow 0.2s,
    background 0.2s;
  border: none;
}
.cart-item-photo-container {
  width: 100px;
  height: 100px;
  border-radius: 14px;
  overflow: hidden;
  background: #eaf6ee;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cart-item-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
}
.cart-item-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100px;
}
.cart-item-title-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.cart-item-title {
  font-weight: 600;
  font-size: 1.1rem;
  color: #2b3a2b;
  margin-bottom: 2px;
}
.cart-item-price {
  font-weight: 500;
  font-size: 1rem;
  color: #388e3c;
}
.cart-item-actions {
  display: flex;
  align-items: center;
  gap: 18px;
}
.cart-item-remove-btn {
  min-width: 0;
  padding: 0 6px;
  background: none !important;
  border-radius: 8px;
  transition: background 0.15s;
  &:hover {
    background: #ffeaea !important;
  }
}
</style>
