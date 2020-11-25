<template>
    <div>
        <el-checkbox v-model="selected1" border>11111</el-checkbox>
        <el-checkbox v-model="selected2" border>22222</el-checkbox>
        <el-checkbox v-model="selected3" border>33333</el-checkbox>
        <br>

<!--        实现类似单选框的功能-->
        <el-checkbox v-model="checked" true-label="1" @change="showChange">北京</el-checkbox>
        <el-checkbox v-model="checked" true-label="2" @change="showChange">南京</el-checkbox>
<!--        true-label才能绑定v-model-->
        <el-checkbox v-model="checked" true-label="3" @change="showChange">西安</el-checkbox>
        <br>

<!--        多选框组-->
<!--        设置最少和最大勾选数量-->
        <el-checkbox-group v-model="checkList" :min="1" :max="2" @change="showList">
<!--            label只有在分组以及v-model对象为数组才有用-->
            <el-checkbox label="鸭子"></el-checkbox>
            <el-checkbox label="犀牛"></el-checkbox>
            <el-checkbox label="河马"></el-checkbox>
            <el-checkbox label="大象" disabled></el-checkbox>
        </el-checkbox-group>

    </div>
</template>

<script>
export default {
    name: "Checkbox",
    data() {
        return {
            selected1: false,
            selected2: true,
            selected3: true,
            checked: "2",
            checkList: ["鸭子", "犀牛"]
        }
    },
    methods: {
        showChange() {
            console.log(this.checked);
        },
        showList() {
            console.log(this.checkList);
        }
    }
}
</script>

<style scoped>

</style>
