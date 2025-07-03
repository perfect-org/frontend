export interface QuestionnaireObject {
  age: number
  gender: string
  physical_activity: boolean
  water_activity: boolean
  smoking_activity: boolean
  alcohol_activity: boolean
  computer_activity: boolean
  sport_activity: boolean
  sleep_activity: boolean
  goal_ids: number[]
  allergy_ids: number[]
}

export interface Question {
  type: string
  required: boolean
  label: string
  options?: { value: string; label: string }[]
  multiple?: boolean
}

export interface QuestionComponentProps extends Question {
  items?: []
  ['item-title']?: string
  ['item-value']?: string
}

export interface QuestionnaireAnswersObject {
  age?: number
  gender?: 'ANY' | 'MALE' | 'FEMALE'
  physical_activity?: boolean
  water_activity?: boolean
  smoking_activity?: boolean
  alcohol_activity?: boolean
  computer_activity?: boolean
  sport_activity?: boolean
  sleep_activity?: boolean
  goal?: number[]
  allergy?: number[]
}
