import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'

export const confirmOrder = async () => {
  const response = await axiosInstance.post(`${API_URL}/order/cart/confirm`)
  return response.data
}
