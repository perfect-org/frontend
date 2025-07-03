import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'

export const getAllergies = async () => {
  const { data } = await axiosInstance.get(`${API_URL}/user_form/allergies`)

  return data.map((item: any) => ({
    value: item.id,
    label: item.name,
  }))
}
