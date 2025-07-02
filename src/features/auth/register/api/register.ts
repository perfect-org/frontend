import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'

export const registerApi = {
  register: async ({
    name,
    email,
    password,
  }: {
    name: string
    email: string
    password: string
  }) => {
    const response = await axiosInstance.post(`${API_URL}/auth/register`, {
      name,
      email,
      password,
    })
    return response.data
  },
}
