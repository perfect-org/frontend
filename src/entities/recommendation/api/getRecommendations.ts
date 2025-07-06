import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'

export const getRecommendations = async () => {
  const response = await axiosInstance.get(`${API_URL}/user_form/recommendations`)
  return response.data
}
