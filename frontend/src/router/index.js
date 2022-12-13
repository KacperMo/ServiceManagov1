import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { auth: false },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      meta: { auth: false },
    },
    {
      path: "/users",
      name: "user",
      component: () => import("../views/UserView.vue"),
      meta: { auth: true },
    },
    {
      path: "/companies",
      name: "company",
      component: () => import("../views/CompanyView.vue"),
      meta: { auth: true },
    },
  ],
});

router.beforeEach((to, from) => {
  if (to.meta.auth === true) {
    return false;
  }
});

export default router;
