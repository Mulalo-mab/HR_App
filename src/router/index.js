import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmployeeView from '@/views/EmployeeView.vue'
import PayrollView from '@/views/PayrollView.vue'
import TimeoffView from '@/views/TimeoffView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
 
  {
    path: '/employee',
    name: 'employee',
    component: EmployeeView
  },
  {
    path: '/payroll',
    name: 'payroll',
    component: PayrollView
  },
  {
    path: '/timeoff',
    name: 'timeoff',
    component: TimeoffView
  },
 
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
