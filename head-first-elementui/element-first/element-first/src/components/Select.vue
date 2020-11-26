<template>
    <div>
<!--        select必须v-model，option必须有value-->
        <el-select v-model="cityName">
            <el-option value="北京">北京</el-option>
            <el-option value="天津">天津</el-option>
        </el-select>
        <br>
<!--        当select的v-model的值与option的value的值一致时，就显示该id对应的label-->
        <el-select ref="selects" v-model="animalId" placeholder="请选择" multiple clearable @change="changeSelect">
            <el-option v-for="animal in animals" :label="animal.name" :value="animal.id" :key="animal.id">
            </el-option>
        </el-select>

        <el-button @click="selectFocus">让select聚焦</el-button>
    </div>
</template>

<script>
export default {
    name: "Select",
    data() {
        return {
            animals: [
                {id: "1", name: "tiger"},
                {id: "2", name: "bear"},
                {id: "3", name: "monkey"},
            ],
            animalId: "",
            cityName: ""
        }
    },
    methods: {
        changeSelect() {
            console.log(this.animalId)
        },
        selectFocus() {
            this.$refs.selects.focus();
        }
    }
}
</script>

<style scoped>

</style>
