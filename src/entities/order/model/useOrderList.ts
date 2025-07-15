import { getAllOrders } from '@/entities/order/api/getAllOrders'
import type { Order } from '@/entities/order/model/types'
import { useQuery } from '@tanstack/vue-query'

export const useOrderList = () => {
  const { data: orders } = useQuery<Order[]>({
    queryKey: ['allOrders'],
    queryFn: getAllOrders,
  })

  return {
    orders,
  }
}
