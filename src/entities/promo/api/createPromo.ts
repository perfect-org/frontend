import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'
import type { Promo } from '../model/types'

export const createPromo = async (promo: Promo) => {
  const response = await axiosInstance.post(`${API_URL}/admin`, promo)
  return response.data
}
