import { useMutation } from '@tanstack/vue-query'
import { loginApi } from '../api/login'
import type { AxiosError } from 'axios'
import { useRouter } from 'vue-router'
import { cookiesApi } from '@/shared/lib/helpers/cookies'
import type { TokensObject } from '@/entities/user/model/types'
import { notifyError, notifySuccess } from '@/shared/lib/services/notification.service'
import { getCurrentUser } from '@/entities/user/api/getCurrentUser'

export const useLogin = () => {
  const { mutate: getCurrentUserInfo } = useMutation({
    mutationFn: getCurrentUser,
    onSuccess: (user) => {
      cookiesApi.setUserCookie(JSON.stringify(user))
    },
    onError: (error) => {
      const errorMessage = 'Ошибка при получении данных пользователя!'
      console.error(`${errorMessage}:`, error)
      notifyError(errorMessage)
    },
  })
  const router = useRouter()
  return useMutation({
    mutationFn: loginApi.login,
    onSuccess: (tokens: TokensObject) => {
      cookiesApi.setTokensCookie({
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
      })
      notifySuccess('Вы успешно вошли в систему!')
      router.push('/questionnaire')
      getCurrentUserInfo()
    },
    onError: (error) => {
      notifyError('Ошибка при входе в систему!')
      const axiosError = error as AxiosError
      if (axiosError.response) {
        console.log('Ошибка при входе в систему:', axiosError.response.data)
      } else {
        console.log('Ошибка при входе в систему:', axiosError)
      }
    },
  })
}
