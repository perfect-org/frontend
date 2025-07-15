import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'

export const getAllOrders = async () => {
  const response = await axiosInstance.get(`${API_URL}/order`)
  return response.data
}
