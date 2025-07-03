import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/pages'
import { cookiesApi } from '@/shared/lib/helpers/cookies'
import { notifyError } from '@/shared/lib/services/notification.service'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !cookiesApi.isAuthenticated()) {
    notifyError('Необходима авторизация!')
    next('/login')
  } else {
    next()
  }
})

export default router
