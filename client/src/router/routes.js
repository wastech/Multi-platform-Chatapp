const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: ":id", component: () => import("pages/Index.vue") }],
  },
  // {
  //   path: "/",
  //   component: () => import("pages/Index.vue"),
  // },
  {
    path: "/login",
    component: () => import("pages/Login.vue"),
  },
  {
    path: "/signup",
    component: () => import("pages/SignUp.vue"),
  },
  {
    path: "/reset-password",
    component: () => import("pages/ResetPassword.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
