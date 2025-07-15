<template>
  <v-container class="product-page-container py-8">
    <v-row class="d-flex product-page-contents">
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <v-img
          v-if="productData.image_url"
          :src="productData.image_url"
          class="product-page-image"
          width="100%"
          height="100%"
          cover
        >
          <template #placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </div>
          </template>
        </v-img>
        <div v-else class="fallback-image d-flex align-center justify-center">
          <span>Нет фото</span>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="product-page-title mb-2">{{ productData.name }}</div>
        <div class="product-page-price mb-4">
          {{ productData.price }} <span class="currency">₽</span>
        </div>
        <div class="product-page-description mb-4">
          {{ productData.description || 'Нет описания' }}
        </div>
        <div class="mb-4">
          <span class="font-weight-medium">Тэги:</span>
          <v-chip-group v-if="productData.tags && productData.tags.length > 0">
            <v-chip v-for="tag in productData.tags" :key="tag" color="success" size="small">{{
              tag.name
            }}</v-chip>
          </v-chip-group>
          <span v-else class="ml-2">Нет тэгов</span>
        </div>
        <v-btn color="success" size="large" @click="addToCurrentCart(productData)">
          Добавить в корзину
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCart } from '@/features/cart/model/useCart'
import { useGetCurrentProduct } from '@/features/product/model/useGetCurrentProduct'
import { computed } from 'vue'

const route = useRoute()
const productId = Number(route.params.id)
const { product } = useGetCurrentProduct(productId)
const productData = computed(() => product.value || {})

const { addToCurrentCart } = useCart()
</script>

<style scoped lang="scss">
.product-page-container {
  max-width: 1250px;
  margin: 0 auto;
}
.product-page-contents {
  width: 75%;
}
.product-page-image {
  border-radius: 18px;
  box-shadow:
    0 4px 24px 0 rgba(60, 120, 80, 0.08),
    0 1.5px 4px 0 rgba(60, 120, 80, 0.04);
  background: #f5f5f5;
}
.product-page-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.product-page-price {
  font-size: 1.3rem;
  color: #388e3c;
  font-weight: 600;
  margin-bottom: 1rem;
}
.currency {
  font-size: 1rem;
  opacity: 0.8;
}
.product-page-description {
  font-size: 1.05rem;
  color: #444;
}
</style>
