import { useQuery } from '@tanstack/vue-query'
import type { Product, ProductListParams } from './types'
import { getAllProducts } from '../api/getAllProducts'

export const useProductList = () => {
  const options = {}

  const { data: products } = useQuery<Product[]>({
    queryKey: ['allProducts', options],
    queryFn: ({ queryKey }) => {
      const [, params] = queryKey as [string, Partial<ProductListParams>]
      return getAllProducts(params)
    },
  })

  return {
    products,
  }
}
