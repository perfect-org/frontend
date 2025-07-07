<template>
  <v-card>
    <div class="image-container">
      <v-img :src="image_url" cover width="100%" height="100%" class="product-image">
        <template #placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </div>
        </template>
      </v-img>
    </div>
    <v-card-title class="d-flex mt-1 mb-1 justify-space-between product-header">
      <h4 class="text-h6">{{ name }}</h4>
      <span class="text-h6 product-price">{{ price }} <span class="currency">руб.</span></span>
    </v-card-title>

    <v-divider class="mx-4"></v-divider>

    <v-row cols="12" class="my-2 mx-2" v-if="product.tags.length > 0">
      <div class="mx-3 my-3">Тэги:</div>
      <v-chip-group color="success">
        <v-chip color="success" v-for="tag in product.tags">{{ tag.name }}</v-chip>
      </v-chip-group>
    </v-row>

    <v-card-actions>
      <v-btn
        color="success"
        text="Add to Cart"
        variant="flat"
        block
        @click="$emit('add-to-cart', product)"
      >
        Добавить в корзину
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Product } from '../model/types'

const props = defineProps<{
  product: Product
}>()
defineEmits<{
  (e: 'add-to-cart', product: Product): void
}>()

const { product } = props
const { name, price, image_url, tags } = product
</script>

<style lang="scss" scoped>
.image-container {
  position: relative;
  overflow: hidden;
  background-color: #f5f5f5;
  width: 100%;
}

.product-header {
  width: 100%;
}

.product-price {
  display: inline-block;
  color: #388e3c;
  font-weight: bold;
  font-size: 0.875rem;
  padding: 3px 14px;
  border-radius: 20px;
  box-shadow: 0 1px 4px rgba(56, 142, 60, 0.15);
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}
.currency {
  font-size: 0.75rem;
  margin-left: 2px;
  opacity: 0.8;
}

.product-image {
  cursor: pointer;
  transition: transform 0.3s ease;
  width: 100%;
  height: 100%;

  &:hover {
    transform: scale(1.05);
  }
}
</style>
