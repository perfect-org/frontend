<template>
  <v-col cols="12" md="8" v-if="items.length > 0">
    <CartProductCard
      v-for="item in items"
      :key="item.id"
      :item="item"
      :onUpdateQuantity="onUpdateQuantity"
    />
  </v-col>
  <v-col cols="12" md="8" v-else>
    <span>Нет добавленных товаров в корзине</span>
  </v-col>
</template>

<script setup lang="ts">
import type { CartProductExtended } from '@/entities/cart/model/types'
import CartProductCard from '@/entities/cart/ui/CartProductCard.vue'

defineProps<{
  items: CartProductExtended[]
  onUpdateQuantity: (id: string, value: number) => void
  onRemove: MutateSyncFunction<any, Error, number, unknown>
}>()
</script>
