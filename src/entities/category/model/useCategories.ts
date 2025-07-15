import { useQuery } from '@tanstack/vue-query'
import { getAllCategories } from '../api/getAllCategories'

export const useCategories = () => {
  const { data: categories } = useQuery({
    queryKey: ['allCategories'],
    queryFn: getAllCategories,
  })

  return {
    categories,
  }
}
