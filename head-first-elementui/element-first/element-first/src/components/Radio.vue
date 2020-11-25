<template>
    <div>
        <h2>radio组件使用</h2>
<!--        没有label时会默认都选中-->
<!--        label必须要和v-model一起使用，点一下会将label的值赋给sex-->
<!--        只要sex的值和label的值能对上，就选中哪个单选框-->
        <el-radio v-model="sex" label="男">男生</el-radio>
        <el-radio v-model="sex" label="女">女生</el-radio>
        <br>

<!--        使用属性-->
        <el-radio v-model="animal" label="猴子" disabled>monkey</el-radio>
        <el-radio v-model="animal" label="猪">pig</el-radio>
<!--        size仅在border为true时生效-->
        <el-radio v-model="animal" label="马" border size="small">horse</el-radio>
        <br>

<!--        使用事件change，绑定值变化时触发的事件-->
<!--        事件的使用和属性的使用一致-->
        <el-radio v-model="language" label="Java" @change="showChoose">Java语言</el-radio>
        <el-radio v-model="language" label="C" @change="showChoose">C语言</el-radio>
        <el-radio v-model="language" label="Python" @change="showChoose">Python语言</el-radio>
        <br>

<!--        单选框组，方便将组下面所有单选框禁用disabled-->
        <el-radio-group v-model="num">
            <el-radio :label="3" border>数字3</el-radio>
            <el-radio :label="6" border>数字6</el-radio>
            <el-radio :label="9" border>数字9</el-radio>
        </el-radio-group>
        <br>
        <br>

<!--        按钮样式-->
<!--        text-color为组内所有按钮激活时候的文字颜色，只能用于按钮组，不能用于普通组-->
<!--        fill为激活时候的填充色和边框色-->
        <el-radio-group v-model="city" text-color="#FF3333" fill="#00FF00">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
<!--        与按钮组对比，按钮组都是已点击状态，而且不能绑定数据-->
        <br>
        <br>

        <el-button-group>
            <el-button type="primary">上海</el-button>
            <el-button type="primary">北京</el-button>
            <el-button type="primary">广州</el-button>
            <el-button type="primary">深圳</el-button>
        </el-button-group>
    </div>
</template>

<script>
export default {
    name: "Radio",
    data() {
        return {
            sex: "男",
            animal: "马",
            language: "C",
            num: 6,
            city: "北京"
        }
    },
    methods: {
        showChoose() {
            console.log(this.language);
        }
    }
}
</script>

<style scoped>

</style>
