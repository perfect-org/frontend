import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'

export const getAllPromo = async () => {
  const response = await axiosInstance.get(`${API_URL}/admin`)
  return response.data
}
