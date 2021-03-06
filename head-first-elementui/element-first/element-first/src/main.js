// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// ElementUI全局注册，引入组件和样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//在Vue脚手架中使用elementUI
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
