import axiosInstance from '@/shared/api/axios'
import type { Product } from '../model/types'
import { API_URL } from '@/shared/api/basePaths'

export const createProduct = async (product: Product) => {
  const response = await axiosInstance.post(`${API_URL}/admin/products`, product)
  return response.data
}
