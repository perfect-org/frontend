import { getRecommendations } from '@/entities/recommendation/api/getRecommendations'
import { cookiesApi } from '@/shared/lib/helpers/cookies'
import { useQuery } from '@tanstack/vue-query'

export const useRecommendations = () => {
  const user = cookiesApi.getUser()
  const { data: recommendations } = useQuery({
    queryKey: ['recommendations', user.id],
    queryFn: getRecommendations,
  })

  return {
    recommendations,
  }
}
