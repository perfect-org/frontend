type UserRoles = 'USER'

export interface UserObject {
  name: string
  email: string
  id: number
  role: UserRoles
}

export interface TokensObject {
  access_token: string
  refresh_token: string
}
