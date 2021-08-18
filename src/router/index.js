import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home.vue";
import view from "../pages/view.vue"


// import Login from '../views/login.vue'

Vue.use(VueRouter);



const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [

        // {
        //     path: '/',
        //     name: 'login',
        //     component: Login,
        // },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/view',
            name: 'view',
            component: view
        },

    ]
});

export default router;