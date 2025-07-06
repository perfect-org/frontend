<template>
  <v-container fluid>
    <h1 class="mb-3">Корзина</h1>
    <v-row>
      <!-- Список товаров -->
      <v-col cols="12" md="8" v-if="products.length > 0">
        <v-card class="mb-6 pa-4 d-flex align-center" flat v-for="product in products">
          <v-img
            width="120"
            height="120"
            class="mr-6"
            cover
            style="background: #444; border-radius: 8px"
          />
          <div class="flex-grow-1">
            <div class="font-weight-bold text-h6 mb-1">{{ product.name }}</div>
            <div class="text-body-2 mb-1">Color | Size</div>
            <div class="text-h6 font-weight-bold mb-2">{{ product.price }}</div>
          </div>
          <v-select
            :items="[1, 2, 3, 4, 5]"
            model-value="1"
            hide-details
            density="compact"
            style="max-width: 60px"
            class="mr-4"
          />
          <v-btn icon color="error">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-card>
      </v-col>

      <v-col cols="12" md="8" v-else>
        <span>Нет добавленных товаров в корзине</span>
      </v-col>

      <v-col cols="12" md="4" v-if="products.length > 0">
        <v-card class="pa-6" elevation="2">
          <div class="text-h6 mb-4">Информация по заказу</div>
          <v-row class="px-3 py-2" justify="space-between">
            <span>Общая сумма</span>
            <span>1000</span>
          </v-row>
          <v-row class="px-3 py-2" justify="space-between">
            <span>Сумма доставки</span>
            <span>3 пирожка</span>
          </v-row>
          <v-row class="px-3 py-2" justify="space-between">
            <span>Налоги</span>
            <span>$8.32</span>
          </v-row>
          <v-divider class="my-4"></v-divider>
          <v-row class="px-3 py-2 mb-3" justify="space-between">
            <span>Сумма заказа</span>
            <span>$112.32</span>
          </v-row>
          <v-btn color="success" block size="large">Оформить заказ</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useCart } from '@/features/cart/model/useCart'

const { cart } = useCart()
const products = cart.value?.items
</script>

<style lang="scss"></style>
