import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/pages'
import { cookiesApi } from '@/shared/lib/helpers/cookies'
import { notifyError } from '@/shared/lib/services/notification.service'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from, next) => {
  // Не проверяем авторизацию на /login вообще
  if (to.path === '/login') {
    next()
    return
  }
  if (to.meta.requiresAuth) {
    let user = cookiesApi.getUser()
    let tries = 0
    while (!user && tries < 5) {
      await new Promise((res) => setTimeout(res, 100))
      user = cookiesApi.getUser()
      tries++
    }
    if (!user) {
      if (!to.query.loggedOut) {
        notifyError('Необходима авторизация!')
      }
      next({ path: '/login', query: { loggedOut: '1' } })
      return
    }
  }
  next()
})

export default router
