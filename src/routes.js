import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from "./views/Home"
import List from "./views/List"


Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/list',
            component: List
        }
    ]
})