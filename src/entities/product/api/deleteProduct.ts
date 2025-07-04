import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'

export const deleteProduct = async (productId: number) => {
  const response = await axiosInstance.delete(`${API_URL}/admin/${productId}`)
  return response.data
}
