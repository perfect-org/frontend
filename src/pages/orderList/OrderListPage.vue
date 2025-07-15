<template>
  <h1>Мои заказы</h1>
  <div class="my-orders my-3">
    <OrderListItem :order="order" v-for="order in orders" />
  </div>
</template>

<script setup lang="ts">
import { useOrders } from '@/features/order/model/useOrders'
import OrderListItem from '@/entities/order/ui/OrderListItem.vue'

const { orders } = useOrders()
</script>

<style scoped>
.my-orders {
  display: flex;
  flex-direction: column;
}
</style>
