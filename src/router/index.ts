import {createRouter, createWebHashHistory} from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import AppTop from "@/views/AppTop.vue";

const routeSettings: RouteRecordRaw[] = [
  {
    path: "/",
    name: "AppTop",
    component: AppTop,
  },
  {
    path: "/formMorning",
    name: "FormMorning",
    component: () => {
      return import("@/views/FormMorning.vue")
    },
  },
  {
    path: "/formEvening",
    name: "FormEvening",
    component: () => {
      return import("@/views/FormEvening.vue")
    },
  },
  {
    path: "/formResult/:timeZone",
    name: "FormResult",
    component: () => {
      return import("@/views/FormResult.vue")
    },
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routeSettings,
});

export default router;
