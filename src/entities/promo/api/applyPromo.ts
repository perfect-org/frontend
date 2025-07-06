import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'

export const applyPromo = async (promo: string) => {
  const response = await axiosInstance.post(`${API_URL}/order/cart/apply-promo?promo=${promo}`)
  return response.data
}
