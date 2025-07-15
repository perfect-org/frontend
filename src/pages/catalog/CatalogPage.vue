<template>
  <h1 class="mb-5" ref="catalogTop">Каталог товаров</h1>
  <CategoriesPanel />
  <v-container fluid>
    <v-row cols="12">
      <v-col cols="8">
        <v-row>
          <v-col cols="4" v-for="product in products" :key="product.id">
            <transition name="fade">
              <ProductListCard :product="product" :key="product.id" />
            </transition>
          </v-col>
        </v-row>
        <v-row>
          <v-pagination
            v-if="paginationLength > 1"
            v-model="currentPage"
            :length="paginationLength"
            :total-visible="5"
            @update:modelValue="onPageChange"
          />
        </v-row>
      </v-col>
      <v-col cols="4">
        <div class="sticky-sidebar">
          <RecommendationSidebar />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useProductList } from '@/entities/product/model/useProductList'
import ProductListCard from '@/features/product/ui/ProductListCard.vue'
import CategoriesPanel from '@/widgets/CategoriesPanel.vue'
import RecommendationSidebar from '@/widgets/RecommendationSidebar.vue'
import { usePagination } from '@/features/pagination/model/usePagination'

const catalogTop = ref<HTMLElement | null>(null)
const limit = 15

const { paginationLength, currentPage, skip, onPageChange, setTotal } = usePagination({
  scrollRef: catalogTop,
  limit,
})
const params = computed(() => ({
  currentPage: currentPage.value,
  skip: skip.value,
  limit,
}))

const { products, total } = useProductList(params)

watch(total, (newTotal) => {
  setTotal(newTotal)
})
</script>

<style lang="scss">
.product-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}
.sticky-sidebar {
  position: sticky;
  top: 85px;
  z-index: 2;
  bottom: 75px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
