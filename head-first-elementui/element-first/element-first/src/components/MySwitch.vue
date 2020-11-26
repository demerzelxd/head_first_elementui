<template>
    <div>
        <el-switch v-model="isActive" active-color="green" inactive-color="red">
        </el-switch>
        <br>
<!--        文字开关-->
        <el-switch v-model="isActive" active-text="按月付费" inactive-text="按年付费">
        </el-switch>
    </div>
</template>

<script>
export default {
    name: "MySwitch",
    data() {
        return {
            isActive: true
        }
    }
}
</script>

<style scoped>

</style>
