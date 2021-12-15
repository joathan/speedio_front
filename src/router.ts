import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "short_urls",
    component: () => import("./components/short_url/ListShortUrl.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/short_url/AddShortUrl.vue"),
  },
  {
    path: "/top100",
    name: "top100",
    component: () => import("./components/short_url/TopHundred.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
