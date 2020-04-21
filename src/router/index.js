import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "",
        name: "index",
        component: () => import("../views/index/Index"),
        meta: {
          title: "/",
        },
      },
    ],
  },
  {
    path: "/msg",
    component: Home,
    children: [
      {
        path: "",
        name: "msg",
        component: () => import("../views/msg/Msg"),
        meta: {
          title: "/msg",
        },
      },
    ],
  },
  {
    path: "/project",
    component: Home,
    children: [
      {
        path: "",
        name: "project",
        component: () => import("../views/project/Project"),
        meta: {
          title: "/project",
        },
      },
    ],
  },
  {
    path: "/publish",
    component: Home,
    children: [
      {
        path: "",
        name: "publish",
        component: () => import("../views/publish/Publish"),
        meta: {
          title: "/publish",
        },
      },
    ],
  },
  {
    path: "/link",
    component: Home,
    children: [
      {
        path: "",
        name: "link",
        component: () => import("../views/link/Link"),
        meta: {
          title: "/link",
        },
      },
    ],
  },
  {
    path: "/article",
    component: Home,
    children: [
      {
        path: "",
        name: "article",
        component: () => import("../views/article/Article"),
        meta: {
          title: "/article",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
