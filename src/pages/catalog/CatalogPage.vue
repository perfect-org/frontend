<template>
  <h1 class="mb-5">Каталог товаров</h1>
  <CategoriesPanel />
  <v-container fluid>
    <v-row cols="12">
      <v-col cols="8">
        <v-row>
          <v-col cols="4" v-for="product in products" :key="product.id">
            <ProductListCard :product="product" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <RecommendationSidebar />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useProductList } from '@/entities/product/model/useProductList'
import ProductListCard from '@/features/product/ui/ProductListCard.vue'
import CategoriesPanel from '@/widgets/CategoriesPanel.vue'
import RecommendationSidebar from '@/widgets/RecommendationSidebar.vue'
const { products } = useProductList()
</script>

<style lang="scss"></style>
