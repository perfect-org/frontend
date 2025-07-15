<template>
  <ProductCard
    :key="product.id"
    :product="product"
    @add-to-cart="() => addToCurrentCart(cartProduct)"
  />
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Product } from '@/entities/product/model/types'
import ProductCard from '@/entities/product/ui/ProductCard.vue'
import { useCart } from '@/features/cart/model/useCart'

const props = defineProps<{ product: Product }>()
const { product } = props

const cartProduct = {
  product_id: product.id,
  quantity: 1,
  price: product.price,
}
const { addToCurrentCart } = useCart()
</script>
