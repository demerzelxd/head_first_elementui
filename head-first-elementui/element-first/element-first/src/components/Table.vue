<template>
    <div>
        <!--border为真时，才能设置列可拖动-->
        <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" border stripe>
            <!--列，prop能获取tableData数据中的所有name属性值-->
            <el-table-column type="selection"></el-table-column>
            <el-table-column label="编号" prop="id" width="200px" align="center" :resizable="false"></el-table-column>
            <el-table-column label="姓名" prop="name"></el-table-column>
            <el-table-column label="年龄" prop="age" sortable></el-table-column>
            <el-table-column label="电话" prop="phone"></el-table-column>
            <!--格式化formatter-->
            <el-table-column label="部门" prop="dept.name" :formatter="showDept"></el-table-column>
            <!--自定义操作列-->
            <el-table-column>
                <template slot="header" slot-scope="scope">
                    <el-input
                        v-model="search"
                        size="mini"
                        placeholder="输入关键字搜索"/>
                </template>
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: "Table",
    data() {
        return {
            tableData: [
                {id: 1, name: "dada", age: 23, phone: "11111111111", dept: {id: 1, name: "建设处"}},
                {id: 2, name: "gaga", age: 34, phone: "22222222222", dept: {id: 2, name: "管理处"}},
                {id: 3, name: "nana", age: 56, phone: "33333333333", dept: {}},
            ],
            search: ""
        }
    },
    methods: {
        showDept(row, column, cellValue, index) {
            // 行对象，列对象，列的值，索引
            if (cellValue) {
                return cellValue;
            } else {
                return "暂无部门";
            }
        },
        handleEdit(index, row) {
            // 索引和row对象

        },
        handleDelete(index, row) {

        }
    }
}
</script>

<style scoped>

</style>
