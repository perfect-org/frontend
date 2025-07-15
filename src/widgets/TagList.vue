<template>
  <v-row cols="12" :class="[className, 'product-tags', 'd-flex', 'align-center']">
    <span :class="`${labelClassName}`">Тэги:</span>
    <v-chip-group
      color="success"
      v-if="product.tags.length > 0"
      :class="{ 'scrollable-chips': product.tags.length > 3 }"
    >
      <v-chip color="success" size="x-small" v-for="tag in product.tags" :key="tag.id">{{
        tag.name
      }}</v-chip>
    </v-chip-group>
    <span v-else :class="labelClassName">Нет тэгов</span>
  </v-row>
</template>

<script setup lang="ts">
import type { Product } from '@/entities/product/model/types'
import { defineProps } from 'vue'
defineProps<{
  product: Product
  className?: string
  labelClassName?: string
}>()
</script>

<style scoped lang="scss">
.product-tags {
  span {
    font-size: 0.75rem;
  }
}
</style>
