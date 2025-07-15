export const orderStatusMapping = {
  PENDING: {
    text: 'Ожидает подтверждения',
    color: 'info',
  },
  confirmed: {
    text: 'Ожидает подтверждения',
    color: 'warning',
  },
  CANCELED: {
    text: 'Отменён',
    color: 'red-darken-1',
  },
  COMPLETED: {
    text: 'Завершён',
    color: 'success',
  },
} as const
