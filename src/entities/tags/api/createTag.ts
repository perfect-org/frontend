import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'
import type { ProductTag } from '../model/types'

export const createTag = async (newTag: ProductTag) => {
  const response = await axiosInstance.post(`${API_URL}/admin/tags`, newTag)
}
