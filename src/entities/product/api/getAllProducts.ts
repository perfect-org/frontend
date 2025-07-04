import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'
import type { ProductListParams } from '../model/types'

export const getAllProducts = async (options: Partial<ProductListParams> = {}) => {
  const params = new URLSearchParams()
  const queryParams = Object.entries(options)

  queryParams.forEach(([option, value]) => {
    params.append(option, value.toString())
  })

  const queryString = queryParams.length
    ? `${API_URL}/product?${params.toString()}`
    : `${API_URL}/product`

  const response = await axiosInstance.get(queryString)
  return response.data
}
