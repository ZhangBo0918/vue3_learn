import { createWebHistory, RouteRecordRaw, createRouter } from 'vue-router'

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../views/Home/index.vue')
  },
  {
    path: '/mine',
    component: () => import('../views/Mine/index.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Login/index.vue')
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router