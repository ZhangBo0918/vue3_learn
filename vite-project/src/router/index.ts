import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/main",
    component: () => import("../views/Main.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;