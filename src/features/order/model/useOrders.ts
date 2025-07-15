import { getAllOrders } from '@/entities/order/api/getAllOrders'
import type { Order } from '@/entities/order/model/types'
import { useQuery } from '@tanstack/vue-query'

export const useOrders = () => {
  const { data: orders } = useQuery<Order[]>({
    queryKey: ['allOrders'],
    queryFn: getAllOrders,
  })

  return {
    orders,
  }
}
