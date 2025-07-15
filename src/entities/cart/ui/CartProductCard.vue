<template>
  <v-card :key="item.product_id" class="cart-item" flat>
    <ProductLink :productId="item.product.id">
      <div class="cart-item-photo-container">
        <v-img
          :src="item.product?.image_url || ''"
          width="100"
          height="100"
          class="cart-item-img"
          cover
        />
      </div>
    </ProductLink>
    <div class="cart-item-content">
      <div class="cart-item-title-row">
        <ProductLink :productId="item.product.id">
          <span class="cart-item-title">{{ item.product?.name }}</span>
        </ProductLink>
        <span class="cart-item-price">{{ item.product.price }} руб.</span>
      </div>
      <div class="cart-item-actions">
        <UpdateQuantityInput :item="item" :update-quantity="onUpdateQuantity" />
        <v-btn
          variant="plain"
          class="cart-item-remove-btn"
          @click="removeAllOfProductFromCart(item.product_id, item.quantity)"
        >
          <v-icon size="18" color="red-darken-1">mdi-delete-outline</v-icon>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { useCart } from '@/features/cart/model/useCart'
import { defineProps } from 'vue'
import type { CartProduct } from '../model/types'
import UpdateQuantityInput from '@/features/cart/updateQuantity/ui/UpdateQuantityInput.vue'
import ProductLink from '@/shared/ui/ProductLink.vue'

defineProps<{
  item: CartProduct
  onUpdateQuantity: (id: string, value: number) => void
}>()

const { removeAllOfProductFromCart } = useCart()
</script>

<style scoped lang="scss">
.cart-item {
  display: flex;
  align-items: center;
  gap: 24px;
  border-radius: 18px;
  background: #f9fafb;
  box-shadow:
    0 4px 24px 0 rgba(60, 120, 80, 0.08),
    0 1.5px 4px 0 rgba(60, 120, 80, 0.04);
  padding: 20px 28px;
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
  gap: 16px;
}
.cart-item-title-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
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
