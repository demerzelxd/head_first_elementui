<template>
    <div>
<!--        组件的属性都写在组件的标签上-->
        <el-button size="mini">创建最简单的按钮</el-button>
        <el-button type="warning" plain  size="small">创建简洁按钮</el-button>
        <el-button type="primary" disabled size="medium">按钮不可用</el-button>
        <el-button type="text">文字按钮</el-button>
        <el-button type="info" icon="el-icon-help">图标按钮</el-button>
        <el-button type="danger" loading>加载按钮</el-button>
        <h3>按钮组</h3>
        <el-button-group>
            <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
<!--            标签<i>用于表现因某些原因需要区分普通文本的一系列文本，在这里就是图标icon-->
            <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
    </div>
</template>

<script>
export default {
    name: "ButtonDetail"
}
</script>

<style scoped>

</style>
