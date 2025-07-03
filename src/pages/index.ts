import { LoginPage } from './login'
import { RegisterPage } from './register'
import { QuestionnairePage } from './questionnaire'
import { CatalogPage } from './catalog'

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
  {
    path: '/questionnaire',
    name: 'Questionnaire',
    component: QuestionnairePage,
    meta: { layout: 'empty', requiresAuth: true },
  },
  {
    path: '/catalog',
    name: 'ProductCatalog',
    component: CatalogPage,
    meta: { layout: 'empty', requiresAuth: true },
  },
]

export * from './login'
