<template>
    <!--用来显示用户列表的组件-->
    <div>
        <el-table
            :height="400"
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%"
            border
            stripe>
            <el-table-column
                label="编号"
                prop="id"
                :resizable="false"
                width="100px">
            </el-table-column>
            <el-table-column
                label="姓名"
                prop="name">
            </el-table-column>
            <el-table-column
                label="性别"
                prop="sex">
            </el-table-column>
            <el-table-column
                label="出生日期"
                prop="bir">
            </el-table-column>
            <el-table-column
                label="地址"
                prop="address">
            </el-table-column>
            <el-table-column
                align="right">
                <template slot="header" slot-scope="scope">
                    <el-input
                        v-model="search"
                        size="mini"
                        placeholder="输入姓名的关键字搜索"/>
                </template>
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">修改
                    </el-button>
                    <el-popconfirm
                        confirm-button-text='确定'
                        cancel-button-text='取消'
                        icon="el-icon-info"
                        icon-color="red"
                        title="确定删除吗"
                        @confirm="handleDelete(scope.$index, scope.row)"
                    >
                        <el-button
                            size="mini"
                            type="danger"
                            slot="reference"
                        >删除
                        </el-button>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
        <!--分页组件-->
        <el-col :span="15" :offset="9">
            <el-pagination
                layout="prev, pager, next, jumper, total, sizes"
                background
                :page-size="pageSize"
                :current-page="pageNow"
                :page-sizes="[2, 4, 6, 8, 10]"
                :total="total"
                @current-change="findPage"
                @size-change="findSize"
                style="margin: 10px 0px">
            </el-pagination>
        </el-col>
        <el-button type="success" @click="controlForm" style="margin-top: 20px;margin-bottom: 20px">添加</el-button>
        <transition name="el-zoom-in-center">
            <div v-show="show" class="transition-box">
                <el-form :rules="rules" ref="userForm" :model="form" label-width="80px"
                         label-suffix=":">
                    <el-form-item label="姓名" prop="name">
                        <el-col :span="4">
                            <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-radio-group v-model="form.sex">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="出生日期" prop="bir">
                        <el-col :span="6">
                            <el-date-picker value-format="yyyy-MM-dd" type="date" placeholder="请选择出生日期" v-model="form.bir"
                                            style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="详细地址" prop="address">
                        <el-input v-model="form.address" type="textarea" placeholder="请输入详细地址"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit('userForm')">保存用户</el-button>
                        <el-button @click="show=!show">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "User",
    data() {
        return {
            tableData: [],
            search: '',
            show: false,
            form: {
                name: '',
                sex: '男',
                bir: '',
                address: ''
            },
            rules: {
                name: [
                    {required: true, message: '请输入用户姓名', trigger: 'blur'},
                ],
                bir: [
                    {required: true, message: '请选择用户生日', trigger: 'blur'},
                ],
                address: [
                    {required: true, message: '请输入用户地址', trigger: 'blur'},
                ],
            },
            total: 0,
            pageNow: 1,
            pageSize: 4
        }
    },
    methods: {
        controlForm() {//点击添加按钮
            this.show = !this.show;
            this.form = {sex: '男'}
        },
        handleEdit(index, row) {
            // console.log(index, row);
            //展开表单
            this.show = true;
            //回显信息
            this.form = row;
        },
        handleDelete(index, row) {
            // console.log(index, row);
            this.$http.get("http://localhost:8989/user/delete?id=" + (row.id)).then((resp) => {
                // console.log(resp.data);
                if (resp.data.status) {
                    this.$message({
                        message: resp.data.msg,
                        type: 'success'
                    });
                    //刷新数据
                    this.getUserList();
                } else {
                    this.$message.error(resp.data.msg);
                }
            })
        },
        getUserList(pageNow, pageSize) {
            //如果没有传参，则默认是1和4
            pageNow = pageNow?pageNow:this.pageNow;
            pageSize = pageSize?pageSize:this.pageSize;
            this.$http.get("http://localhost:8989/user/findByPage?pageNow="+pageNow+"&pageSize="+pageSize).then((resp) => {
                // console.log(resp.data);
                this.tableData = resp.data.users;
                this.total = resp.data.total;
            })
        },
        onSubmit(formName) {
            // console.log(this.form);
            //判定表单内容是否符合规范，符合了才能提交
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    //验证通过才发送请求提交
                    // alert('submit!');
                    this.$http.post("http://localhost:8989/user/saveOrUpdate", this.form).then((resp) => {
                        // console.log(resp.data);
                        if (resp.data.status) {
                            this.$message({
                                message: resp.data.msg,
                                type: 'success'
                            });
                            //清空表单
                            this.form = {sex: '男'};
                            //隐藏表单
                            this.show = false;
                            //刷新数据
                            this.getUserList();
                        } else {
                            this.$message.error(resp.data.msg);
                        }
                    })
                } else {
                    this.$message.error('当前输入的数据不合法');
                    return false;
                }
            });
        },
        findPage(page) {
            //处理分页<findPage方法默认回传当前页码，从1开始
            // console.log(page);
            this.pageNow = page;
            this.getUserList(page, this.pageSize);
        },
        findSize(size) {
            //处理下拉菜单中每页显示多少条
            // console.log(size);
            this.pageSize = size;
            this.getUserList(this.pageNow, size);
        }
    },
    created() {
        this.getUserList();
    }
}
</script>

<style>
.transition-box {
    margin-bottom: 10px;
    width: 100%;
    height: 600px;
    border-radius: 4px;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
}
</style>
