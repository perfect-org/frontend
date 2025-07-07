import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'

export const clearCart = async () => {
  const response = await axiosInstance.delete(`${API_URL}/order/clear`)
  return response.data
}
