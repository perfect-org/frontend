import { LoginPage } from './login'
import { RegisterPage } from './register'

export const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: { layout: 'empty' },
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
    meta: { layout: 'empty' },
  },
]

export * from './login'
