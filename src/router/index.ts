import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import haveRoleGuard from "./role-guard";

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
    beforeEnter: [haveRoleGuard],
    // Lazy loading: no carga los archivos hasta que se visita este path
    component: () =>
      import(/* webpackChunkName: "aboutView" */ "../views/AboutView.vue"),
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () =>
      import(/*webpackChunkName: detail*/ "../views/DetailView.vue"),
    props: (route) => {
      const id = Number(route.params.id);
      const userRole = localStorage.getItem('userRole');
      return isNaN(id) ? { id: null, userRole } : { id, userRole };
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
