import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'

type ProductCategory = {
  name: string
  description: string
}

export const createCategory = async (category: ProductCategory) => {
  const response = await axiosInstance.post(`${API_URL}/admin/categories`, category)
}
