import type { Product } from '@/entities/product/model/types'
import type { Promocode } from '@/entities/promo/model/types'

export type OrderStatus = 'PENDING' | 'confirmed' | 'CANCELED' | 'COMPLETED'

export type OrderItem = {
  product_id: number
  quantity: number
  id: number
  product: Product
}

export type Order = {
  id: number
  user_id: number
  status: OrderStatus
  total_amount: number
  items: OrderItem[]
  promo: Promocode
}
