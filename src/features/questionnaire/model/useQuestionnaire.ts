import { ref, computed, onMounted, reactive } from 'vue'
import { questions as questionsRaw } from '../model/questions'
import { getGoals } from '../api/getGoals'
import { getAllergies } from '../api/getAllergies'
import type { Question, QuestionComponentProps, QuestionnaireAnswersObject } from './types'
import { sendQuestionnaire } from '../api/sendQuestionnaire'
import { useMutation, useQuery } from '@tanstack/vue-query'
import { useRouter } from 'vue-router'

export const useQuestionnaire = () => {
  const router = useRouter()

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
      console.log('Анкета успешно сохранена!')
    },
    onError: (error) => {
      console.error('Ошибка при отправке анкеты:', error)
    },
  })

  onMounted(async () => {
    const goalQuestion = questions.find((q) => q.key === 'goal')
    if (goalQuestion) goalQuestion.options = goals

    const allergyQuestion = questions.find((q) => q.key === 'allergy')
    if (allergyQuestion) allergyQuestion.options = allergies
  })

  const currentIndex = ref(0)
  const answers = ref<QuestionnaireAnswersObject>({})
  const slideDirection = ref<'left' | 'right'>('left')
  const questions = reactive(questionsRaw)

  const currentQuestion = computed(() => questions[currentIndex.value])
  const isLast = computed(() => currentIndex.value === questions.length - 1)
  const progress = computed(() => ((currentIndex.value + 1) / questions.length) * 100)
  const isRadioChecked = computed(() => {
    const value = answers.value[currentQuestion.value.key]
    return value !== null && value !== undefined
  })

  const canProceed = computed(() => {
    const q = currentQuestion.value
    if (!q) return false
    if (q.required) {
      return answers.value[q.key] !== undefined && answers.value[q.key] !== ''
    }
    return true
  })

  const nextQuestion = async () => {
    if (isLast.value) {
      sendQuestionnaireResults(answers.value)
      return
    }
    slideDirection.value = 'left'
    currentIndex.value++
  }

  const prevQuestion = async () => {
    if (currentIndex.value > 0) currentIndex.value--
    slideDirection.value = 'right'
  }

  function getComponent(type: string) {
    switch (type) {
      case 'number':
        return 'v-text-field'
      case 'select':
        return 'v-select'
      case 'checkbox':
        return 'v-radio-group'
      default:
        return 'v-text-field'
    }
  }

  function getComponentProps(q: Question) {
    const props: QuestionComponentProps = {
      type: q.type,
      required: q.required,
      label: q.label,
    }
    if (q.type === 'select') {
      props.items = q.options || []
      props['item-title'] = 'label'
      props['item-value'] = 'value'
    }
    if (q.multiple) {
      props.multiple = true
    }
    return props
  }

  return {
    currentIndex,
    answers,
    slideDirection,
    questions,
    currentQuestion,
    isLast,
    progress,
    isRadioChecked,
    canProceed,
    nextQuestion,
    prevQuestion,
    getComponent,
    getComponentProps,
  }
}
