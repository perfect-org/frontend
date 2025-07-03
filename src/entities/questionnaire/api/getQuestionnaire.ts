import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'

export const getQuestionnaire = async () => {
  const { data } = await axiosInstance.get(`${API_URL}/user_form/form`)
  return data
}
