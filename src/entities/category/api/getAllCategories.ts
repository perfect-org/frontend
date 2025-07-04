import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'

export const getAllCategories = async () => {
  const response = await axiosInstance.get(`${API_URL}/product/categories`)
  return response.data
}
