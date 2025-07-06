import { cookiesApi } from '@/shared/lib/helpers/cookies'
import { useRouter } from 'vue-router'

export const useLogout = () => {
  const router = useRouter()

  const logout = () => {
    cookiesApi.removeAuthCookies()
    router.push('/login')
  }

  return {
    logout,
  }
}
