<template>
  <v-menu v-model="cartMenu" transition="slide-y-transition" :close-on-content-click="false">
    <template #activator="{ props }">
      <v-btn icon v-bind="props">
        <v-badge v-if="cartCount > 0" :content="cartCount" color="red" size="x-large">
          <v-icon>mdi-cart</v-icon>
        </v-badge>
        <v-icon v-else>mdi-cart</v-icon>
      </v-btn>
    </template>
    <v-card min-width="350">
      <v-list v-if="cartItemsWithProductInfo.length > 0">
        <v-list-item
          v-for="item in cartItemsWithProductInfo"
          :key="item.product_id"
          class="cart-item px-3 py-3"
          style="align-items: flex-start"
        >
          <div class="cart-item-photo-container">
            <v-img
              :src="item.product?.image_url || ''"
              width="56"
              height="56"
              class="mr-4 cart-item-photo"
            />
          </div>
          <div
            class="flex-grow-1 d-flex flex-column justify-space-between"
            style="min-height: 56px"
          >
            <div class="d-flex justify-space-between align-center">
              <span class="font-weight-bold">{{ item.product?.name || 'Неизвестный товар' }}</span>
              <span class="font-weight-bold ml-4">{{ item.product?.price }} руб.</span>
            </div>
            <div class="text-grey text-body-2 mb-1">
              {{ item.product?.color || '' }}
            </div>
            <div class="d-flex justify-space-between align-center">
              <span class="text-body-2">Кол-во: {{ item.quantity }}</span>
              <v-btn
                variant="plain"
                class="pa-0"
                style="min-width: 0"
                @click="removeFromCurrentCart(item.product_id)"
              >
                <span class="text-blue text-caption font-weight-medium text-success">Удалить</span>
              </v-btn>
            </div>
          </div>
        </v-list-item>
      </v-list>

      <div v-else class="empty-cart">
        <v-list-item>
          <div class="d-flex flex-column align-center justify-center py-8">
            <v-icon size="64" color="success" class="mb-4">mdi-cart-outline</v-icon>
            <div class="text-h6 text-green-darken-1 mb-2">В корзине нет товаров</div>
            <div class="text-body-2 text-green-darken-1">
              Добавьте товары в корзину для оформления заказа
            </div>
          </div>
        </v-list-item>
      </div>

      <v-divider v-if="cartItemsWithProductInfo.length > 0"></v-divider>
      <v-card-actions v-if="cartItemsWithProductInfo.length > 0">
        <v-btn color="success" block @click="handleCheckout">Оформить заказ</v-btn>
      </v-card-actions>
      <v-card-actions v-if="cartItemsWithProductInfo.length > 0">
        <v-btn text block :to="{ path: 'cart' }" exact>Открыть корзину</v-btn>
      </v-card-actions>
      <v-card-actions v-if="cartItemsWithProductInfo.length > 0">
        <v-btn color="red-darken-1" text block>Удалить корзину</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCart } from '../model/useCart'
import { useProductList } from '@/entities/product/model/useProductList'

const { products } = useProductList()
const { cart, removeFromCurrentCart, checkout, viewCart } = useCart()

const cartMenu = ref(false)
const cartItems = computed(() => cart.value?.items || [])
const cartCount = computed(() =>
  cartItems.value.reduce((sum, item) => sum + (item.quantity || 0), 0),
)

const cartItemsWithProductInfo = computed(() => {
  if (!products || !cartItems.value) return []

  return cartItems.value.map((item) => ({
    ...item,
    product: products.value?.find((p) => p.id === item.product_id),
  }))
})

function handleCheckout() {
  cartMenu.value = false
  checkout()
}

function handleViewCart() {
  cartMenu.value = false
  viewCart()
}
</script>

<style lang="scss">
.cart-item .v-list-item__content {
  display: flex;
  width: 100%;
}

.cart-item-photo-container {
  width: 56px;
  height: 56px;
  margin-right: 10px;
  .cart-item-photo {
    border-radius: 8px;
    background: #444;
    min-width: 56px;
    min-height: 56px;
    max-width: 56px;
    max-height: 56px;
    object-fit: contain;
  }
}
</style>
