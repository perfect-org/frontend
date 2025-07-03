import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'

export const getGoals = async () => {
  const { data } = await axiosInstance.get(`${API_URL}/user_form/goals`)

  return data.map((item: any) => ({
    value: item.id,
    label: item.name,
  }))
}
