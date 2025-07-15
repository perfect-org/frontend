<template>
  <v-number-input
    :model-value="item.quantity"
    @update:model-value="onInput"
    hide-details
    control-variant="split"
    style="max-width: 200px"
  />
</template>

<script setup lang="ts">
import type { CartProduct } from '@/entities/cart/model/types'
import { defineProps } from 'vue'
import { useCart } from '../../model/useCart'

const props = defineProps<{
  item: CartProduct
  updateQuantity: (id: string, value: number) => void
}>()

function onInput(newValue: number) {
  if (newValue > props.item.quantity) {
    addToCurrentCart({
      product_id: props.item.product_id,
      quantity: newValue - props.item.quantity,
    })
  } else if (newValue < props.item.quantity) {
    for (let i = 0; i < props.item.quantity - newValue; i++) {
      removeFromCurrentCart(props.item.product_id)
    }
  }
}

const { addToCurrentCart, removeFromCurrentCart } = useCart()
</script>

<style scoped lang="scss"></style>
