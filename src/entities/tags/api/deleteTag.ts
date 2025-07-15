import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'

export const deleteTag = async (tagId: number) => {
  const response = await axiosInstance.delete(`${API_URL}/admin/${tagId}`)
  return response.data
}
