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
    {
      path: "/login",
      name: "login",
      component: () => import("../views/auth/LoginView.vue"),
      meta: { auth: false },
    },
    {
      path: "/logout",
      name: "logout",
      component: () => import("../views/auth/LogoutView.vue"),
      meta: { auth: false },
    },
  ],
});

router.beforeEach((to, from) => {
  const user = null;

  if (to.meta.auth === true && user === null && to.name !== "login") {
    return { name: "login" };
  }
});

export default router;
