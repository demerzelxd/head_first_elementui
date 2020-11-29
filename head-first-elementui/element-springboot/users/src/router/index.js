import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/Index";
import User from "../components/user/User";

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', redirect: '/index'},
        {path: '/index', component: Index},
        {path: '/user', component: User},
    ]
})
