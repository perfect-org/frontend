import { computed, unref, watch } from 'vue'
import type { ComputedRef } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { getAllProducts } from '../api/getAllProducts'
import type { Product } from './types'

interface ProductListResponse {
  products: Product[]
  total: number
}

export function useProductList(
  params: ComputedRef<{ skip: number; limit: number; currentPage: number }>,
) {
  const {
    data: response,
    refetch,
    isFetching,
  } = useQuery<ProductListResponse>({
    queryKey: ['allProducts', unref(params)],
    queryFn: () => getAllProducts(unref(params)),
  })

  const products = computed(() => response.value?.products ?? [])
  const total = computed(() => response.value?.total ?? 0)

  watch(params, () => {
    refetch()
  })

  return {
    products,
    total,
    refetch,
    isFetching,
  }
}
