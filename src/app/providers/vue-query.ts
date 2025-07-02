import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'

export const queryClient = new QueryClient()

export const vueQueryPlugin = {
  install(app) {
    app.use(VueQueryPlugin, { queryClient })
  },
}
