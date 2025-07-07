import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'

export const removeFromCart = async (productId: number) => {
  const response = await axiosInstance.delete(`${API_URL}/order/cart/items/${productId}`)
  return response.data
}
