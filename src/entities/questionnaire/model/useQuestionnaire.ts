import { getGoals } from '../api/getGoals'
import { getAllergies } from '../api/getAllergies'
import { sendQuestionnaire } from '../api/sendQuestionnaire'
import { useMutation, useQuery } from '@tanstack/vue-query'
import { useRouter } from 'vue-router'
import { notifyError, notifySuccess } from '@/shared/lib/services/notification.service'
import { getQuestionnaire } from '../api/getQuestionnaire'
import { updateQuestionnaire } from '../api/updateQuestionnaire'

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

  const { mutate: updateQuestionnaireResults } = useMutation({
    mutationFn: updateQuestionnaire,
    onSuccess: () => {
      notifySuccess(`Ваша анкета успешно обновлена!`)
    },
    onError: (error) => {
      const errorMessage = `Ошибка при обновлении анкеты!`
      notifyError(errorMessage)
      console.error(`${errorMessage}:`, error)
    },
  })

  return {
    goals,
    allergies,
    sendQuestionnaireResults,
    updateQuestionnaireResults,
    questionnaire,
    isQuestionnaireError,
    error,
  }
}
