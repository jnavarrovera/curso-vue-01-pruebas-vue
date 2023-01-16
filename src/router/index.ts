import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    // Eager loading: carga todo al inicio
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // Lazy loading: no carga los archivos hasta que se visita este path
    component: () =>
      import(/* webpackChunkName: "aboutView" */ "../views/AboutView.vue"),
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () =>
      import(/*webpackChunkName: detail*/ "../views/DetailView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
