import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import AsyncComponent from '../views/AsyncComponent.vue';
import SomeTest from '../views/SomeTest.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/test2',
    name: 'Main',
    component: SomeTest,
  },
  {
    path: '/test1',
    name: 'Test1',
    component: AsyncComponent
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;