import { addToCart } from '@/entities/cart/api/addToCart'
import { clearCart } from '@/entities/cart/api/clearCart'
import { confirmOrder } from '@/entities/cart/api/confirmOrder'
import { getCart } from '@/entities/cart/api/getCart'
import { removeFromCart } from '@/entities/cart/api/removeFromCart'
import type { Cart } from '@/entities/cart/model/types'
import { useProductList } from '@/entities/product/model/useProductList'
import { notifyError, notifySuccess } from '@/shared/lib/services/notification.service'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export const useCart = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const { data: cart } = useQuery<Cart>({
    queryKey: ['cart'],
    queryFn: getCart,
  })

  const { mutate: addToCurrentCart } = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      notifySuccess('Товар успешно добавлен в корзину!')
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
    onError: (error) => {
      const errorMessage = 'Ошибка при добавлении товара в корзину!'
      console.error(`${errorMessage}:`, error)
      notifyError(errorMessage)
    },
  })

  const { mutate: removeFromCurrentCart } = useMutation({
    mutationFn: removeFromCart,
    onSuccess: () => {
      notifySuccess('Товар успешно удалён из корзины!')
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
    onError: (error) => {
      const errorMessage = 'Ошибка при удалении товара из корзины!'
      console.error(`${errorMessage}:`, error)
      notifyError(errorMessage)
    },
  })

  const { mutate: clearCurrentCart } = useMutation({
    mutationFn: clearCart,
    onSuccess: () => {
      notifySuccess('Корзина успешно очищена!')
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
    onError: (error) => {
      const errorMessage = 'Ошибка при очищении корзины!'
      console.error(`${errorMessage}:`, error)
      notifyError(errorMessage)
    },
  })

  const { mutate: checkout } = useMutation({
    mutationFn: confirmOrder,
    onSuccess: () => {
      notifySuccess('Вы успешно соверщили заказ!')
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
    onError: (error) => {
      const errorMessage = 'Ошибка при совершении заказа!'
      console.error(`${errorMessage}:`, error)
      notifyError(errorMessage)
    },
  })

  const viewCart = () => {
    router.push('/cart')
  }

  const { products } = useProductList()

  const cartItems = computed(() => cart.value?.items || [])
  const subtotal = computed(() =>
    cartItemsWithProductInfo.value.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0,
    ),
  )
  const shipping = 200
  const overallWithDiscount = computed(
    () =>
      cart?.value?.promo &&
      Math.round(
        ((subtotal.value + shipping) / 100) * (100 - Number(cart.value?.promo.discount_percent)),
      ),
  )
  const overall = computed(() => subtotal.value + shipping)
  const cartItemsWithProductInfo = computed(() => {
    if (!products || !cartItems.value) return []

    return cartItems.value.map((item) => ({
      ...item,
      product: products.value?.find((p) => p.id === item.product_id),
    }))
  })

  const { mutate: updateQuantityOnServer } = useMutation({
    mutationFn: async ({ productId, quantity }: { productId: number; quantity: number }) => {
      await updateQuantity(productId, quantity)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
  })

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (!cart.value || !Array.isArray(cart.value.items)) return
    const item = cart.value.items.find(
      (i: { product_id: number; quantity: number }) => i.product_id === productId,
    )
    if (item) item.quantity = newQuantity
  }

  return {
    cart,
    cartItemsWithProductInfo,
    removeFromCurrentCart,
    addToCurrentCart,
    clearCurrentCart,
    checkout,
    viewCart,
    subtotal,
    products,
    shipping,
    overallWithDiscount,
    overall,
  }
}
