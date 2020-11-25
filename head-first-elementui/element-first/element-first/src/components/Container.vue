<template>
    <div>
        <h2>布局容器组件</h2>
        <el-container>
            <el-header height="100px">我是header</el-header>
<!--            容器嵌套-->
            <el-container>
                <el-aside width="250px">我是aside</el-aside>
                <el-main>我是main</el-main>
            </el-container>
            <el-footer>我是footer</el-footer>
        </el-container>
        <br>
        <el-container>
            <el-aside width="250px">我是aside</el-aside>
            <!--            容器嵌套-->
            <el-container>
                <el-header width="250px">我是header</el-header>
                <el-main>我是main</el-main>
                <el-footer>我是footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "Container"
}
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #e9eef3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
