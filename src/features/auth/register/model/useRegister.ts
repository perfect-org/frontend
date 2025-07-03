import { useMutation } from '@tanstack/vue-query'
import { registerApi } from '../api/register'
import type { AxiosError } from 'axios'
import { useRouter } from 'vue-router'
import { notifyError, notifySuccess } from '@/shared/lib/services/notification.service'

export const useRegister = () => {
  const router = useRouter()
  return useMutation({
    mutationFn: registerApi.register,
    onSuccess: () => {
      notifySuccess('Вы успешно зарегистрировались!')
      router.push('/login')
    },
    onError: (error) => {
      notifyError('Произошла ошибка при регистрации!')
      const axiosError = error as AxiosError
      if (axiosError.response) {
        console.log('Ошибка при регистрации:', axiosError.response.data)
      } else {
        console.log('Ошибка при регистрации:', axiosError)
      }
    },
  })
}
