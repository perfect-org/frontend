import { addToCart } from '@/entities/cart/api/addToCart'
import { clearCart } from '@/entities/cart/api/clearCart'
import { confirmOrder } from '@/entities/cart/api/confirmOrder'
import { getCart } from '@/entities/cart/api/getCart'
import { removeFromCart } from '@/entities/cart/api/removeFromCart'
import type { Cart, CartProductExtended } from '@/entities/cart/model/types'
import { useProductList } from '@/entities/product/model/useProductList'
import { notifyError, notifySuccess } from '@/shared/lib/services/notification.service'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { computed, type ComputedRef } from 'vue'
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

  const removeAllOfProductFromCart = (productId: number, quantity: number) => {
    for (let i = 0; i < quantity; i++) {
      removeFromCurrentCart(productId)
    }
  }

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
      queryClient.invalidateQueries({ queryKey: ['allOrders'] })
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
    Math.round(
      cartItemsWithProductInfo.value.reduce(
        (sum, item) => sum + item.product.price * (item.quantity || 1),
        0,
      ),
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
  const cartItemsWithProductInfo: ComputedRef<CartProductExtended[]> = computed(() => {
    if (!products || !cartItems.value) return []

    return cartItems.value.map((item) => ({
      ...item,
      product: products.value?.find((p) => p.id === item.product_id),
    }))
  })

  return {
    cart,
    cartItemsWithProductInfo,
    removeAllOfProductFromCart,
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
