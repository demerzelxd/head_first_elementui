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
import Input from "../components/Input";
import Select from "../components/Select";
import MySwitch from "../components/MySwitch";
import DatePicker from "../components/DatePicker";
import Upload from "../components/Upload";
import Form from "../components/Form";
import Table from "../components/Table";

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
        {path: '/input', component: Input},
        {path: '/select', component: Select},
        {path: '/mySwitch', component: MySwitch},
        {path: '/datePicker', component: DatePicker},
        {path: '/upload', component: Upload},
        {path: '/form', component: Form},
        {path: '/table', component: Table},
    ]
})
