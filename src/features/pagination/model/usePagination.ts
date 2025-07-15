import { ref, computed, nextTick, type Ref, type ComputedRef } from 'vue'

interface PaginationProps {
  scrollRef: Ref<HTMLElement | null, HTMLElement | null>
  limit: number
}

export const usePagination = (props: PaginationProps) => {
  const { scrollRef } = props

  const limit = 15
  const currentPage = ref(1)
  const totalRef = ref(0)
  const skip = computed(() => (currentPage.value - 1) * limit)
  const paginationLength = computed(() => Math.ceil(totalRef.value / limit))

  const setTotal = (newTotal: number) => {
    totalRef.value = newTotal
  }

  const onPageChange = (page: number) => {
    currentPage.value = page
    nextTick(() => {
      if (scrollRef.value) {
        const top = scrollRef.value.getBoundingClientRect().top + window.scrollY - 100
        window.scrollTo({ top, behavior: 'smooth' })
      }
    })
  }

  return {
    paginationLength,
    currentPage,
    onPageChange,
    limit,
    skip,
    setTotal,
  }
}
