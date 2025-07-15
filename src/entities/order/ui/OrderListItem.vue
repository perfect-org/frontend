<template>
  <v-card class="order-card mb-5" elevation="4" rounded="lg" :key="order.id">
    <v-card-title class="order-header d-flex align-center justify-space-between">
      <span>Заказ № {{ order.id }}</span>
      <v-chip
        :color="orderStatusMapping[order.status].color"
        class="order-status-chip"
        size="small"
      >
        {{ orderStatusMapping[order.status].text }}
      </v-chip>
    </v-card-title>
    <v-divider></v-divider>
    <div class="order-contents">
      <v-row class="order-items-grid" cols="12">
        <v-col cols="2" v-for="item in order.items" :key="item.id">
          <ProductLink :productId="item.product.id" :key="item.id">
            <div class="order-item-card">
              <div class="image-container">
                <ProductImage :image_url="item.product.image_url" />
              </div>
              <div class="px-3 py-2 d-flex flex-column order-item-description">
                <div class="order-item-title">{{ item.product.name }}</div>
                <div class="order-item-details">
                  <div class="order-item-price">
                    Сумма: {{ item.product.price * item.quantity }} ₽
                  </div>
                  <div class="order-item-qty">
                    Количество: {{ item.quantity }} x {{ item.product.price }}
                  </div>
                </div>
              </div>
            </div>
          </ProductLink>
        </v-col>
      </v-row>
    </div>
    <v-divider></v-divider>
    <div class="order-footer d-flex justify-end align-center pa-3">
      <span class="order-total-label">Итого:&nbsp;</span>
      <span class="order-total-amount">
        {{ order.promo ? Math.round(orderTotalWithDiscount) : Math.round(order.total_amount) }}
        ₽
      </span>
      <v-chip
        color="deep-purple-accent-2"
        v-if="order.promo"
        class="ml-2"
        size="small"
        prepend-icon="mdi-sale"
      >
        Скидка {{ order.promo.discount_percent }}%
      </v-chip>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { orderStatusMapping } from '@/entities/order/model/statusMapping'
import type { Order } from '@/entities/order/model/types'
import ProductImage from '@/shared/ui/ProductImage.vue'
import ProductLink from '@/shared/ui/ProductLink.vue'
import { computed, defineProps } from 'vue'

const props = defineProps<{
  order: Order
}>()

const orderTotalWithDiscount = computed(() =>
  Math.round((props.order.total_amount / 100) * (100 - Number(props.order.promo.discount_percent))),
)
</script>

<style scoped lang="scss">
.order-card {
  border-radius: 18px;
  padding: 0;
}
.order-header {
  font-size: 1.15rem;
  font-weight: 600;
  background: #f7f7fa;
  border-radius: 18px 18px 0 0;
  padding: 1rem 1.5rem 0.5rem 1.5rem;
}
.image-container {
  border-radius: 10px 10px 0 0;
}
.product-image {
  border-radius: 10px 10px 0 0;
}
.fallback-image {
  width: 100%;
  height: 220px;
  background: #e0e0e0;
  color: #888;
  font-size: 1.1rem;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.order-status-chip {
  font-weight: 500;
  letter-spacing: 0.5px;
}
.order-contents {
  background: white;
  padding: 0.5rem 1.5rem 1rem 1.5rem;
}
.order-option-container {
  margin-bottom: 0.5rem;
  .order-option {
    font-weight: bold;
  }
}
.order-items-grid {
  display: flex;
  justify-items: start;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
.order-item-link {
  height: 100%;
}
.order-item-card {
  background: #fafaff;
  border-radius: 20px !important;
  display: flex;
  flex-direction: column;
  min-width: 220px;
  height: 100%;
  box-shadow:
    0 4px 24px 0 rgba(60, 120, 80, 0.08),
    0 1.5px 4px 0 rgba(60, 120, 80, 0.04) !important;
  margin-bottom: 24px;
  transition:
    box-shadow 0.2s,
    background 0.2s;
  border: 1px solid rgb(209, 248, 209);
  &:hover {
    box-shadow:
      0 8px 32px 0 rgba(60, 120, 80, 0.14),
      0 2px 8px 0 rgba(60, 120, 80, 0.08);
    background: #f4f8f6;
  }
}
.order-item-description {
  flex: 1;
}
.order-item-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.image-container {
  position: relative;
  overflow: hidden;
  background-color: #f5f5f5;
  width: 100%;
}
.order-item-title {
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  text-align: left;
}
.order-item-qty {
  font-size: 0.85rem;
  color: #888;
}
.order-item-price {
  font-size: 0.95rem;
  color: #388e3c;
  font-weight: 500;
  margin-top: 0.25rem;
}
.order-footer {
  background: #f7f7fa;
  border-radius: 0 0 18px 18px;
  font-size: 1.1rem;
  font-weight: 600;
  padding-right: 1.5rem !important;
}
.order-total-label {
  color: #888;
  margin-right: 0.25rem;
}
.order-total-amount {
  color: #3a3a5a;
  font-size: 1.15rem;
}
</style>
