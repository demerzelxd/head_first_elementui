<template>
    <div id="app">
<!--        <router-link to="/button" tag="button">点我显示button</router-link>-->
        <el-link href="#/button">显示button</el-link>
        <el-link href="#/buttonDetail">button组件的详细使用</el-link>
        <el-link href="#/link">link组件的详细使用</el-link>
        <el-link href="#/layout">layout栅格组件的详细使用</el-link>
        <el-link href="#/container">container布局容器组件的详细使用</el-link>
        <el-link href="#/containerExam">container布局示例</el-link>
        <el-link href="#/radio">radio单选框</el-link>
        <el-link href="#/checkbox">checkbox多选框</el-link>
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
