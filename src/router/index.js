import { createRouter, createWebHistory } from '@ionic/vue-router';

import Tabs from '../views/Tabs.vue'
const routes = [
  {
    path: '/',
    redirect: '/tabs/tab1',
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'tab1',
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tabs/Tab1.vue'),
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tabs/Tab2.vue'),
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tabs/Tab3.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
