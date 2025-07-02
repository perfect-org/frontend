import { useMutation } from '@tanstack/vue-query'
import { registerApi } from '../api/register'
import type { AxiosError } from 'axios'
import { useRouter } from 'vue-router'

export const useRegister = () => {
  const router = useRouter()
  return useMutation({
    mutationFn: registerApi.register,
    onSuccess: (user) => {
      console.log(`Объект пользователя:`, user)
      router.push('/login')
    },
    onError: (error) => {
      const axiosError = error as AxiosError
      if (axiosError.response) {
        console.log('Ошибка при регистрации:', axiosError.response.data)
      } else {
        console.log('Ошибка при регистрации:', axiosError)
      }
    },
  })
}
