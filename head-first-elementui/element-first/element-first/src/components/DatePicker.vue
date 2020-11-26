<template>
    <div>
        <el-date-picker v-model="createDate" placeholder="请输入创建时间" start-placeholder="创建时间" end-placeholder="结束时间"
                        type="datetimerange">
        </el-date-picker>
        <!--        只读-->
        <el-date-picker v-model="createDate" readonly>
        </el-date-picker>
        <!--        失效-->
        <el-date-picker v-model="createDate" disabled>
        </el-date-picker>
        <br>
        <!--        picker options用于对日期做限定，比如不能选今天之后的时间
                    shortcuts用于显示快捷按钮今天昨天等-->
        <el-date-picker v-model="createDate" type="date" placeholder="请输入时间" :picker-options="pickerOptions">
        </el-date-picker>
    </div>
</template>

<script>
export default {
    name: "DatePicker",
    data() {
        return {
            createDate: "",
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                    }
                }]
            },
        }
    }
}
</script>

<style scoped>

</style>
