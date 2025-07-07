import { queryClient } from '@/app/providers/vue-query'
import { applyPromo } from '@/entities/promo/api/applyPromo'
import { notifyError, notifySuccess } from '@/shared/lib/services/notification.service'
import { useMutation } from '@tanstack/vue-query'

export const usePromocode = () => {
  const { mutate: applyPromocode } = useMutation({
    mutationFn: applyPromo,
    onSuccess: () => {
      notifySuccess(`Промокод успешно применён к заказу!`)
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
    onError: (error) => {
      const errorMessage = `Ошибка применения промокода к корзине!`
      notifyError(`Ошибка применения промокода к корзине!`)
      console.error(`${errorMessage}:`, error)
    },
  })

  return {
    applyPromocode,
  }
}
