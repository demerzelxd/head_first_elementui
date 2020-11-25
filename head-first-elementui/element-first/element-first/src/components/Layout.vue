<template>
    <div>
        <h3>布局组件</h3>
<!--        tag用于指定当前行最终渲染的格式，默认为div，可以修改为span-->
        <el-row tag="span">
            <el-col :span="6"><div style="border: 1px green solid">占用6份</div></el-col>
            <el-col :span="6"><div style="border: 1px green solid">占用6份</div></el-col>
            <el-col :span="6"><div style="border: 1px green solid">占用6份</div></el-col>
            <el-col :span="6"><div style="border: 1px green solid">占用6份</div></el-col>
        </el-row>
        <el-row :gutter="10">
<!--            左右空隙-->
            <el-col :span="6"><div style="border: 1px green solid">占用6份</div></el-col>
            <el-col :span="6"><div style="border: 1px green solid">占用6份</div></el-col>
            <el-col :span="6"><div style="border: 1px green solid">占用6份</div></el-col>
            <el-col :span="6"><div style="border: 1px green solid">占用6份</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="6"><div style="border: 1px green solid">占用6份</div></el-col>
<!--            偏移6,向右挤,超出的会另起一行,而push为向右浮动,还是会只占据这一行-->
            <el-col :span="6" :offset="6"><div style="border: 1px green solid">占用6份</div></el-col>
        </el-row>
        <br>
<!--        flex的justify-->
        <el-row type="flex">
            <el-col :span="6"><div style="border: 1px green solid">占用6份</div></el-col>
            <el-col :span="6"><div style="border: 1px green solid">占用6份</div></el-col>
            <el-col :span="6"><div style="border: 1px green solid">占用6份</div></el-col>
        </el-row>
        <el-row type="flex" justify="center">
            <el-col :span="6"><div style="border: 1px green solid">占用6份</div></el-col>
            <el-col :span="6"><div style="border: 1px green solid">占用6份</div></el-col>
            <el-col :span="6"><div style="border: 1px green solid">占用6份</div></el-col>
        </el-row>
        <el-row type="flex" justify="end">
            <el-col :span="6"><div style="border: 1px green solid">占用6份</div></el-col>
            <el-col :span="6"><div style="border: 1px green solid">占用6份</div></el-col>
            <el-col :span="6"><div style="border: 1px green solid">占用6份</div></el-col>
        </el-row>
        <br>
    </div>
</template>

<script>
export default {
    name: "Layout"
}
</script>

<style scoped>

</style>
