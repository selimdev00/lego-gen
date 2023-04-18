import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/pages/index.vue"),
    },
    {
      path: "/about",
      component: () => import("@/pages/about/index.vue"),
    },
    {
      path: "/generate",
      component: () => import("@/pages/generate/index.vue"),
    },
  ],
});

export default router;
