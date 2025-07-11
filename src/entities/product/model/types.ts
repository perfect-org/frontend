export type ProductListParams = {
  name: string
  min_price: number
  max_price: number
  min_age: number
  gender: 'MALE' | 'FEMALE'
  is_active: boolean
  skip: number
  limit: number
}

export type CreateProduct = {
  id: number
  name: string
  price: number
  description: string
  image_url: string
  min_age: number
  gender: 'MALE' | 'FEMALE'
  is_active: boolean
  category_id: number
  tag_ids: number[]
}

export type Product = {
  name: string
  price: number
  description: string
  image_url: string
  min_age: number
  gender: 'MALE' | 'FEMALE'
  is_active: boolean
  id: number
  category: {
    name: string
    description: string
    id: number
  }
  tags: string[]
}
