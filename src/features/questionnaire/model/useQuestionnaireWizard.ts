import { ref, computed, reactive, onMounted, type Ref } from 'vue'
import type {
  Question,
  QuestionComponentProps,
  QuestionnaireAnswersObject,
} from '@/entities/questionnaire/model/types'
import { questions as questionsRaw } from './questions'

interface QuestionnaireWizardProps {
  goals: Ref<any, any> | Ref<undefined, undefined>
  allergies: Ref<any, any> | Ref<undefined, undefined>
  sendQuestionnaireResults: MutateSyncFunction<any, Error, QuestionnaireAnswersObject, unknown>
}

export function useQuestionnaireWizard(props: QuestionnaireWizardProps) {
  const { goals, allergies, sendQuestionnaireResults } = props

  onMounted(async () => {
    const goalQuestion = questions.value.find((q) => q.key === 'goal')
    if (goalQuestion) goalQuestion.options = goals

    const allergyQuestion = questions.value.find((q) => q.key === 'allergy')
    if (allergyQuestion) allergyQuestion.options = allergies
  })

  const currentIndex = ref(0)
  const answers = ref<QuestionnaireAnswersObject>({})
  const slideDirection = ref<'left' | 'right'>('left')
  const questions = ref(questionsRaw)

  const currentQuestion = computed(() => questions.value[currentIndex.value])
  const isLast = computed(() => currentIndex.value === questions.value.length - 1)
  const progress = computed(() => ((currentIndex.value + 1) / questions.value.length) * 100)
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
