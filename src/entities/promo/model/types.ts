export interface CreatePromo {
  code: string
  discount_percent: number
}

export interface Promocode extends CreatePromo {
  id: number
  is_available: boolean
}
