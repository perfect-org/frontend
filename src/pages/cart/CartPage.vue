<template>
  <v-container fluid>
    <h1 class="mb-3">Корзина</h1>
    <v-row>
      <v-col cols="12" md="8" v-if="cartItemsWithProductInfo.length > 0">
        <v-card
          v-for="item in cartItemsWithProductInfo"
          :key="item.product_id"
          class="mb-5 pa-4 d-flex align-center cart-item"
          flat
        >
          <div class="cart-item-photo-container">
            <v-img
              :src="item.product?.image_url || ''"
              width="100"
              height="100"
              class="mr-6"
              cover
              style="background: #444; border-radius: 12px"
            />
          </div>
          <div
            class="flex-grow-1 d-flex flex-column justify-space-between"
            style="min-height: 100px"
          >
            <div class="d-flex flex-column mb-2">
              <span class="font-weight-bold text-h6">{{ item.product?.name }}</span>
              <span class="font-weight-bold text-h6">{{ item.price }} руб.</span>
            </div>
            <div class="d-flex justify-space-between align-center">
              <v-number-input
                :model-value="item.quantity"
                @update:model-value="(val) => updateQuantity(item.product_id, val)"
                hide-details
                control-variant="split"
                style="max-width: 200px"
              />
              <v-btn
                variant="plain"
                class="pa-0"
                style="min-width: 0"
                @click="removeFromCurrentCart(item.product_id)"
              >
                <span class="remove-button text-caption font-weight-medium text-red-darken-1"
                  >Удалить</span
                >
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="8" v-else>
        <span>Нет добавленных товаров в корзине</span>
      </v-col>

      <v-col cols="12" md="4" v-if="cartItemsWithProductInfo.length > 0">
        <v-card class="pa-6" elevation="2">
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
              >&nbsp;
              <span :class="{ 'price-with-discount': cart?.promo }">{{ overall }}</span> руб.
            </div>
          </v-row>
          <v-chip v-if="cart?.promo" color="success" class="mb-3"
            >с учётом скидки {{ cart?.promo.discount_percent }}%</v-chip
          >
          <ApplyPromoForm />
          <v-btn color="success" class="mb-3" block size="large" @click="checkout"
            >Оформить заказ</v-btn
          >
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
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import ApplyPromoForm from '@/features/cart/applyPromo/ui/ApplyPromoForm.vue'
import { useCart } from '@/features/cart/model/useCart'
import ConfirmDialog from '@/shared/ui/ConfirmDialog.vue'

const {
  cart,
  cartItemsWithProductInfo,
  removeFromCurrentCart,
  clearCurrentCart,
  checkout,
  subtotal,
  shipping,
  overallWithDiscount,
  overall,
} = useCart()
</script>

<style scoped lang="scss">
.cart-item {
  border-radius: 6px;
  border: 1px solid rgb(189, 246, 189);
  background: rgba(216, 255, 216, 0.3) !important;
  margin-bottom: 20px;
}
.price-with-discount {
  text-decoration: line-through;
}
.cart-item-photo-container {
  width: 100px;
  height: 100%;
  margin-right: 20px;
  .v-img {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.cart-delete-btn {
  background: #fff2f2 !important;
  border-radius: 0;
  transition: background 0.2s;

  .v-icon {
    color: green;
  }
}
.cart-delete-btn:hover {
  background: #ffcccc;
}
.cartpage-item-photo-container {
  width: 120px;
  height: 120px;
  margin-right: 5px;
}

.cartpage-item-photo-container {
  width: 150px;
  height: 150px;
  .v-img {
    width: 150px;
    height: 150px;

    img {
      object-fit: contain;
    }
  }
}
</style>
