import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import EmployeeView from '@/views/EmployeeView.vue'
import PayrollView from '@/views/PayrollView.vue'
import TimeoffView from '@/views/TimeoffView.vue'


const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
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
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
