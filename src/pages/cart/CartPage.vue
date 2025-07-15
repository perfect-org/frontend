<template>
  <v-container fluid class="pa-0">
    <h1 class="mb-3">Корзина</h1>
    <v-row cols="12">
      <CartList
        :items="cartItemsWithProductInfo"
        :onRemove="removeFromCurrentCart"
        :onUpdateQuantity="updateQuantity"
      />
      <CartSummary
        :cart="cart"
        :cartItemsWithProductInfo="cartItemsWithProductInfo"
        :clearCurrentCart="clearCurrentCart"
        :checkout="checkout"
        :subtotal="subtotal"
        :shipping="shipping"
        :overallWithDiscount="overallWithDiscount"
        :overall="overall"
      />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useCart } from '@/features/cart/model/useCart'
import CartList from '@/widgets/CartList.vue'
import CartSummary from '@/widgets/CartSummary.vue'

const {
  cart,
  cartItemsWithProductInfo,
  removeFromCurrentCart,
  clearCurrentCart,
  checkout,
  subtotal,
  shipping,
  overallWithDiscount,
  updateQuantity,
  overall,
} = useCart()
</script>

<style scoped lang="scss">
.cart-item {
  border-radius: 6px;
  border: 1px solid rgb(189, 246, 189);
  box-shadow: 1px 1px 1px 1px rgb(214, 214, 214);
  background: white !important;
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
