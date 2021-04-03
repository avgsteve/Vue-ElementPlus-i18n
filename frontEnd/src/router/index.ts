import {
  createRouter, createWebHistory, RouteRecordRaw
} from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";

const basicRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
    props: true,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import( /* webpackChunkName: "About" */
        "../components/About.vue")
  },

];


const router = createRouter({
  history: createWebHistory(),
  routes: basicRoutes as RouteRecordRaw[]
});

// import { store } from '../../store/index';
// router.beforeEach(function (to, from, next) {
//   console.log('router.beforeEach:', { to, from, next });
//   store.getters
// })

export default router;
