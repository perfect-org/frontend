import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'

export const getCart = async () => {
  const response = await axiosInstance.get(`${API_URL}/order/cart`)
  return response.data
}
