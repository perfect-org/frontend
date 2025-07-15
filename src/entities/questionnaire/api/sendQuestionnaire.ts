import axiosInstance from '@/shared/api/axios'
import { API_URL } from '@/shared/api/basePaths'
import type { QuestionnaireAnswersObject } from '../model/types'

export const sendQuestionnaire = async (answers: QuestionnaireAnswersObject) => {
  const response = await axiosInstance.post(`${API_URL}/user_form/`, answers)
  return response.data
}
