import { useMutation } from '@tanstack/vue-query'
import { loginApi } from '../api/login'
import type { AxiosError } from 'axios'

export const useLogin = () => {
  return useMutation({
    mutationFn: loginApi.login,
    onSuccess: (tokens) => {
      console.log(`Токены авторизации:`, tokens)
    },
    onError: (error) => {
      const axiosError = error as AxiosError
      if (axiosError.response) {
        console.log('Ошибка при входе в систему:', axiosError.response.data)
      } else {
        console.log('Ошибка при входе в систему:', axiosError)
      }
    },
  })
}
