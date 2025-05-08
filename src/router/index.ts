import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import WelcomeView from "@/views/WelcomeView.vue";
import RegisterView from "@/views/RegisterView.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: LoginView },
  { path: "/cadastrar", component: RegisterView },
  {
    path: "/boas-vindas",
    component: WelcomeView,
    meta: { requiresAuth: true },
  },
  {
    path: "/home",
    component: { template: "<h1>Home Genérica</h1>" },
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  const usuario = localStorage.getItem("usuario");

  if (requiresAuth && !usuario) {
    next("/login");
  } else {
    next();
  }
});

export default router;
