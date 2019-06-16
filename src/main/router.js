import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/TeacherManage",
      props: true,
      component: () => import("./views/TeacherManage")
    },
    {
      path: "/InviInfo",
      props: true,
      component: () => import("./views/InviInfo")
    },
    {
      path: "/InviAllot",
      props: true,
      component: () => import("./views/InviAllot")
    },
    {
      path: "/TaskList",
      props: true,
      component: () => import("./views/TaskList")
    },
    {
      path: "/TaskResult",
      props: true,
      component: () => import("./views/TaskResult")
    }
  ]
});
