<template>
  <v-col cols="12" md="4" v-if="cartItemsWithProductInfo.length > 0">
    <v-card class="cart-item pa-6" elevation="2" flat>
      <h2 class="mb-4">Информация по заказу</h2>
      <v-row class="px-3 py-2" justify="space-between">
        <span>Общая сумма</span>
        <span>{{ subtotal }} руб.</span>
      </v-row>
      <v-row class="px-3 py-2" justify="space-between">
        <span>Сумма доставки</span>
        <span>{{ shipping }} руб.</span>
      </v-row>
      <v-divider class="my-4"></v-divider>
      <v-row class="px-3 py-2 mb-3" justify="space-between">
        <span>Сумма заказа</span>
        <div>
          <span style="color: green">{{ overallWithDiscount }}</span
          >&nbsp; <span :class="{ 'price-with-discount': cart?.promo }">{{ overall }}</span> руб.
        </div>
      </v-row>
      <v-chip v-if="cart?.promo" color="success" class="mb-3"
        >с учётом скидки {{ cart?.promo.discount_percent }}%</v-chip
      >
      <ApplyPromoForm />
      <v-row cols="12" class="pa-0">
        <v-col cols="6" class="py-0">
          <v-btn color="success" class="mb-3" block size="large" @click="checkout"
            >Оформить заказ</v-btn
          >
        </v-col>
        <v-col cols="6" class="py-0">
          <ConfirmDialog
            icon="mdi-alert"
            :title="`Очищение корзины`"
            :text="`Вы действительно хотите очистить корзину?`"
            :onConfirm="clearCurrentCart"
          >
            <template #activator="{ props }">
              <v-btn v-bind="props" color="red-darken-2" block size="large">Очистить корзину</v-btn>
            </template>
          </ConfirmDialog>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script setup lang="ts">
import type { Cart, CartProductExtended } from '@/entities/cart/model/types'
import ApplyPromoForm from '@/features/cart/applyPromo/ui/ApplyPromoForm.vue'
import ConfirmDialog from '@/shared/ui/ConfirmDialog.vue'
import { defineProps } from 'vue'

defineProps<{
  cart: Ref<Cart, Cart> | Ref<undefined, undefined>
  cartItemsWithProductInfo: CartProductExtended[]
  clearCurrentCart: MutateSyncFunction<any, Error, void, unknown>
  checkout: MutateSyncFunction<any, Error, void, unknown>
  subtotal: number
  shipping: number
  overallWithDiscount: number | undefined
  overall: number
}>()
</script>

<style scoped lang="scss">
.cart-item {
  border-radius: 18px;
  background: white;
  box-shadow:
    0 4px 24px 0 rgba(60, 120, 80, 0.08),
    0 1.5px 4px 0 rgba(60, 120, 80, 0.04) !important;
  padding: 20px 28px;
  margin-bottom: 24px;
  transition:
    box-shadow 0.2s,
    background 0.2s;
  border: none;
  &:hover {
    box-shadow:
      0 8px 32px 0 rgba(60, 120, 80, 0.14),
      0 2px 8px 0 rgba(60, 120, 80, 0.08) !important;
    background: #f4f8f6 !important;
  }
}
.summary-actions {
  display: flex;
  gap: 10px;
}
</style>
