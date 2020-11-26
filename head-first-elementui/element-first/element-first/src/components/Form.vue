<template>
    <div>
        <!--默认label在上，可以调整位置，label-position和label-width需要一起使用-->
        <el-form label-position="right" label-width="80px">
            <el-form-item label="姓名">
                <el-input></el-input>
            </el-form-item>
        </el-form>

        <br>
        <br>
        <br>
        <!--垂直表单的属性label-suffix可以统一做冒号-->
        <!--hide-required-asterisk=false显示表单验证的红色星号，也就是需要验证的设为必填-->
        <!--:rules指定规则-->
        <el-form ref="form" label-suffix=":" :model="form" :rules="rules" label-width="100px" :hide-required-asterisk="false">
            <!--表单验证-->
            <el-form-item label="活动名称" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
                <el-col :span="8">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                    style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="0.5">——</el-col>
                <el-col :span="8">
                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="即时配送">
                <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源">
                <el-radio-group v-model="form.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <!--提交时手动进行验证-->
                <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
        <br>
        <br>
        <br>
        <!--内联表单，在一行展示，在el:form设置属性:inline="true"即可-->
        <h1>自定义表单的验证规则</h1>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
            <el-form-item label="手机号" prop="phone">
                <el-input type="text" v-model="ruleForm.phone" autocomplete="on"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit('ruleForm')">提交</el-button>
                <el-button>重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "Form",
    data() {
        const validatePhone = (rule, value, callback) => {
            if (!value || value === '') {
                callback(new Error('手机号不能为空'));
            } else {
                //符合手机号的正则表达式
                if (!/^1[0-9]{10}$/.test(value)) {
                    // this.$refs.ruleForm.validateField('checkPass');
                    callback(new Error('手机号格式错误'));
                }
                callback();
            }
        };
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            ruleForm: {
                phone: ''
            },
            rules: {
                name: [
                    {required: true, message: '请输入活动名称', trigger: 'blur'},
                    {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                ],
                phone: [
                    {validator: validatePhone, trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        onSubmit(formName) {
            // console.log('submit!');
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                    //发送异步请求到springboot项目
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>

<style scoped>

</style>
