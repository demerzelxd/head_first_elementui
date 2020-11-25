import Vue from 'vue'
import Router from 'vue-router'
import Button from "../components/Button";
import ButtonDetail from "../components/ButtonDetail";
import Link from "../components/Link";
import Layout from "../components/Layout";
import Container from "../components/Container";
import ContainerExam from "../components/ContainerExam";
import Radio from "../components/Radio";
import Checkbox from "../components/Checkbox";

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/button', component: Button},
        {path: '/buttonDetail', component: ButtonDetail},
        {path: '/link', component: Link},
        {path: '/layout', component: Layout},
        {path: '/container', component: Container},
        {path: '/containerExam', component: ContainerExam},
        {path: '/radio', component: Radio},
        {path: '/checkbox', component: Checkbox},
    ]
})
