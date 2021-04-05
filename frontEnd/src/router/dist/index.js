"use strict";
exports.__esModule = true;
var vue_router_1 = require("vue-router");
var HelloWorld_vue_1 = require("../components/HelloWorld.vue");
var basicRoutes = [
    {
        path: "/",
        name: "HelloWorld",
        component: HelloWorld_vue_1["default"],
        props: true
    },
    {
        path: "/about",
        name: "about",
        component: function () {
            return Promise.resolve().then(function () { return require(/* webpackChunkName: "About" */ "../components/About.vue"); });
        }
    },
];
var router = vue_router_1.createRouter({
    history: vue_router_1.createWebHistory(),
    routes: basicRoutes
});
// import { store } from '../../store/index';
// router.beforeEach(function (to, from, next) {
//   console.log('router.beforeEach:', { to, from, next });
//   store.getters
// })
exports["default"] = router;
