import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'
import type { UserObject } from '../model/types'

export const getCurrentUser = async (): Promise<UserObject> => {
  const response = await axiosInstance.get(`${API_URL}/auth/me`)
  return response.data
}
