import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'
import type { CartProduct } from '../model/types'

export const addToCart = async (cartProduct: CartProduct) => {
  const response = await axiosInstance.post(`${API_URL}/order/cart/items`, cartProduct)
  return response.data
}
