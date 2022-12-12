import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/users",
      name: "user",
      component: () => import("../views/UserView.vue"),
    },
    {
      path: "/companies",
      name: "company",
      component: () => import("../views/CompanyView.vue"),
    },
  ],
});

export default router;
