<template>
    <div id="app">
<!--        <router-link to="/button" tag="button">点我显示button</router-link>-->
        <el-link href="#/button" :underline="false">显示button</el-link>
        <el-link href="#/buttonDetail" :underline="false">button组件的详细使用</el-link>
        <el-link href="#/link" :underline="false">link组件的详细使用</el-link>
        <el-link href="#/layout" :underline="false">layout栅格组件的详细使用</el-link>
        <el-link href="#/container" :underline="false">container布局容器组件的详细使用</el-link>
        <el-link href="#/containerExam" :underline="false">container布局示例</el-link>
        <el-link href="#/radio" :underline="false">radio单选框</el-link>
        <el-link href="#/checkbox" :underline="false">checkbox多选框</el-link>
        <el-link href="#/input" :underline="false">input输入框</el-link>
        <el-link href="#/select" :underline="false">select 选择器</el-link>
        <el-link href="#/mySwitch" :underline="false">switch 开关</el-link>
        <el-link href="#/datePicker" :underline="false">DatePicker 日期选择器</el-link>
        <el-link href="#/upload" :underline="false">upload上传</el-link>
        <el-link href="#/form" :underline="false">form表单</el-link>
        <el-link href="#/table" :underline="false">table表格</el-link>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
</style>
