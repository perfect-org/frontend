import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'
import type { AxiosError } from 'axios'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 0,
      gcTime: 0,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
    mutations: {
      retry: false,
      onError: (error) => {
        const axiosError = error as AxiosError
        if (axiosError.response?.status === 400) {
          const errorData = axiosError.response.data as {
            detail?: string
          }
          console.warn(errorData.detail)
        }
        throw error
      },
    },
  },
})

export const vueQueryPlugin = {
  install(app) {
    app.use(VueQueryPlugin, { queryClient })
  },
}
