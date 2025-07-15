<template>
  <v-card height="100%" class="d-flex flex-column cart-item">
    <ProductLink :productId="product.id" class="product-link">
      <div class="product-contents">
        <div class="image-container">
          <ProductImage :image_url="product.image_url" />
        </div>
        <v-card-title class="d-flex flex-column mt-1 mb-1 justify-space-between product-header">
          <h6 class="product-title">{{ name }}</h6>
          <span class="text-h6 product-price">{{ price }} <span class="currency">руб.</span></span>
        </v-card-title>
        <v-divider class="mx-4"></v-divider>
        <TagList :product="product" :labelClassName="`mx-3 my-3`" :className="`my-2 mx-2`" />
        <v-row cols="12" class="mb-2 mx-5" v-if="product.description">
          <span class="product-description">{{ product.description }}</span>
        </v-row>
        <v-row cols="12" class="mb-2 mx-5" v-else>
          <span class="product-description">Нет описания</span>
        </v-row>
      </div>
    </ProductLink>
    <v-card-actions>
      <v-btn
        color="success"
        text="Add to Cart"
        variant="flat"
        block
        @click.stop="$emit('add-to-cart', product)"
      >
        Добавить в корзину
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps, ref, watch } from 'vue'
import type { Product } from '../model/types'
import ProductImage from '@/shared/ui/ProductImage.vue'
import ProductLink from '@/shared/ui/ProductLink.vue'
import TagList from '@/widgets/TagList.vue'

const props = defineProps<{
  product: Product
}>()
defineEmits<{
  (e: 'add-to-cart', product: Product): void
}>()

const { product } = props
const hasImageError = ref(false)
watch(
  () => props.product.image_url,
  () => {
    hasImageError.value = false
  },
)
const { name, price, image_url } = product

function onAddToCart(event) {
  event.stopPropagation()
  emit('add-to-cart', product)
}
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 18px;
  background: #f9fafb;
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
.product-title {
  width: 100%;
  font-size: 1rem;
  white-space: normal;
  word-break: break-word;
  overflow-wrap: break-word;
}
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
  font-family: 'Nunito', sans-serif !important;
  display: inline-block;
  color: #388e3c;
  font-weight: bold;
  font-size: 0.875rem !important;
  padding: 0.5rem 0;
  letter-spacing: 0.5px;
}
.currency {
  font-size: 0.75rem;
  margin-left: 2px;
  opacity: 0.8;
}

.product-description {
  font-size: 0.75rem;
}
</style>
