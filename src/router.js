import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/main";
import ReportPage from "@/views/report";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "report",
        component: ReportPage,
        meta: { guest: true },
      },
    ],
  },
  {
    path: "/auth",
    component: () => import(/* webpackChunkName: "auth" */ "@/layouts/auth"),
    children: [],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
