import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'

export const editProduct = async (productId: number) => {
  const response = await axiosInstance.patch(`${API_URL}/admin/${productId}`)
  return response.data
}
