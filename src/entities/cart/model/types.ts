import type { Product } from '@/entities/product/model/types'
import type { Promocode } from '@/entities/promo/model/types'

export interface CartProduct {
  product_id: number
  quantity: number
}

export interface CartProductExtended extends CartProduct {
  product: Product | undefined
}

export type CartProductStatus = 'PENDING' | 'CONFIRMED' | 'CANCELED' | 'COMPLETED'

export type Cart = {
  id: number
  user_id: number
  status: CartProductStatus
  total_amount: number
  items: CartProduct[]
  promo: Promocode
}
