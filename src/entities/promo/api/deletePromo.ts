import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'

export const deletePromo = async (promoId: number) => {
  const response = await axiosInstance.delete(`${API_URL}/admin/${promoId}`)
  return response.data
}
