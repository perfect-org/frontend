<template>
  <router-link :to="`/catalog/product/${productId}`" :class="`product-link ${className}`">
    <slot />
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
  productId: number
  className?: string
}>()
</script>

<style scoped lang="scss">
.product-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}
</style>
