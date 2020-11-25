<template>
    <div>
        <h2>文字链接组件</h2>
<!--        修改属性时，要通过 :属性-->
<!--        target=_blank表示以新窗口打开-->
        <el-link :underline="false" target="_blank" href="http://www.baidu.com">默认链接，且不显示下划线</el-link>
        <el-link icon="el-icon-s-promotion" type="success">成功链接</el-link>
    </div>
</template>

<script>
export default {
    name: "Link"
}
</script>

<style scoped>

</style>
