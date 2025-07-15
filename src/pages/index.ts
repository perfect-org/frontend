import { LoginPage } from './login'
import { RegisterPage } from './register'
import { QuestionnairePage } from './questionnaire'
import CatalogPage from './catalog/CatalogPage.vue'
import ShopLayout from '@/app/ui/ShopLayout.vue'
import ProductPage from './catalog/product/ProductPage.vue'
import ProfilePage from './profile/ProfilePage.vue'
import CartPage from './cart/CartPage.vue'
import AdminPage from './admin/AdminPage.vue'
import OrderListPage from './orderList/OrderListPage.vue'

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
    path: '/',
    component: ShopLayout,
    meta: { layout: 'empty', requiresAuth: true },
    children: [
      { path: 'catalog', component: CatalogPage },
      {
        path: '/catalog/product/:id',
        component: ProductPage,
        props: true,
      },
      {
        path: 'profile',
        component: ProfilePage,
      },
      {
        path: 'cart',
        component: CartPage,
      },
      {
        path: 'cart',
        component: CartPage,
      },
      {
        path: 'orders',
        component: OrderListPage,
      },
      {
        path: 'admin',
        component: AdminPage,
      },
    ],
  },
]

export * from './login'
