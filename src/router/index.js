import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import HomeView from '../views/HomeView.vue';
import EmployeeView from '@/views/EmployeeView.vue';
import PayrollView from '@/views/PayrollView.vue';
import TimeoffView from '@/views/TimeoffView.vue';

const routes = [
  {
    path: '/',
    redirect: '/login', // Redirect root path to the login page
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/employee',
    name: 'employee',
    component: EmployeeView,
  },
  {
    path: '/payroll',
    name: 'payroll',
    component: PayrollView,
  },
  {
    path: '/timeoff',
    name: 'timeoff',
    component: TimeoffView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
