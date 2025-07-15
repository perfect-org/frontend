import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'

export const updateQuestionnaire = async () => {
  const response = await axiosInstance.patch(`${API_URL}/user_form/`)
  return response.data
}
