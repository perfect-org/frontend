import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'

export const getProductById = async (productId: number) => {
  const response = await axiosInstance.get(`${API_URL}/product/${productId}`)
  return response.data
}
