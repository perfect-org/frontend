import { watch } from 'vue'
import { getGoals } from '../api/getGoals'
import { getAllergies } from '../api/getAllergies'
import { sendQuestionnaire } from '../api/sendQuestionnaire'
import { useMutation, useQuery } from '@tanstack/vue-query'
import { useRouter } from 'vue-router'
import { notifyError, notifySuccess } from '@/shared/lib/services/notification.service'
import { getQuestionnaire } from '../api/getQuestionnaire'

export const useQuestionnaire = () => {
  const router = useRouter()

  const {
    data: questionnaire,
    isError: isQuestionnaireError,
    error,
  } = useQuery({
    queryFn: getQuestionnaire,
    queryKey: ['questionnaire'],
  })

  const { data: goals } = useQuery<any>({
    queryFn: getGoals,
    queryKey: ['goals'],
  })

  const { data: allergies } = useQuery<any>({
    queryFn: getAllergies,
    queryKey: ['allergies'],
  })

  const { mutate: sendQuestionnaireResults } = useMutation({
    mutationFn: sendQuestionnaire,
    onSuccess: (response) => {
      notifySuccess('Анкета успешно сохранена!')
      router.push('/catalog')
    },
    onError: (error) => {
      notifyError('Ошибка при отправке анкеты!')
      console.error('Ошибка при отправке анкеты:', error)
    },
  })

  watch(
    () => ({
      questionnaire: questionnaire.value,
      isError: isQuestionnaireError.value,
      error: error.value,
    }),
    ({ questionnaire }) => {
      console.log(questionnaire)
      if (questionnaire) {
        router.replace('/catalog')
      }
    },
    { immediate: true },
  )

  return {
    goals,
    allergies,
    sendQuestionnaireResults,
  }
}
