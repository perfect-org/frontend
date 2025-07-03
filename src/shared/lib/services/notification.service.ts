import { ref } from 'vue'

export const snackbar = ref(false)
export const snackbarText = ref('')
export const snackbarColor = ref('success')

export const notifySuccess = (message: string) => {
  snackbarText.value = message
  snackbarColor.value = 'success'
  snackbar.value = true
}

export const notifyError = (message: string) => {
  snackbarText.value = message
  snackbarColor.value = 'red'
  snackbar.value = true
}
