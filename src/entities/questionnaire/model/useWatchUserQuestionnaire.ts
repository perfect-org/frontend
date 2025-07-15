import { useRouter } from 'vue-router'
import { watch } from 'vue'

export const useWatchUserQuestionnaire = (questionnaire, isQuestionnaireError, error) => {
  const router = useRouter()
  watch(
    () => ({
      questionnaire: questionnaire.value,
      isError: isQuestionnaireError.value,
      error: error.value,
    }),
    ({ questionnaire }) => {
      if (!router) {
        console.error('[useWatchUserQuestionnaire] router is undefined!')
        return
      }
      if (questionnaire) {
        console.log(questionnaire)
        router.replace('/catalog')
      } else {
        router.replace('/questionnaire')
      }
    },
    { immediate: true },
  )
}
