import { getProductById } from '@/entities/product/api/getProductById'
import { useQuery } from '@tanstack/vue-query'

export const useGetCurrentProduct = (productId: number) => {
  const { data: product } = useQuery({
    queryKey: ['product', productId],
    queryFn: ({ queryKey }) => getProductById(queryKey[1] as number),
  })

  return {
    product,
  }
}
