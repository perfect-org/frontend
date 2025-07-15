import { cookiesApi } from '@/shared/lib/helpers/cookies'
import { useRouter } from 'vue-router'

export const useLogout = () => {
  const router = useRouter()

  const logout = () => {
    cookiesApi.removeAuthCookies()
    router.replace({ path: '/login', query: { loggedOut: '1' } })
  }

  return {
    logout,
  }
}
