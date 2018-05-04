<template>
    <div>
        <el-tabs v-model="activeTab" type="card">
            <el-tab-pane label="用户组列表" name="first">
                <div class="table">
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column label="用户组ID" prop="id" align="center" width="100"></el-table-column>
                        <el-table-column label="用户组名称" prop="name" align="center" ></el-table-column>
                        <el-table-column label="描述" prop="describle" align="center" ></el-table-column>
                        <el-table-column label="状态" prop="status" align="center" ></el-table-column>
                        <el-table-column label="操作"  align="center" >
                            <template slot-scope="scope">
                                <el-button type="text" size="small" @click="editGroupInfo(scope.row)">编辑</el-button>
                                <el-button type="text" size="small" @click="delGroupInfo(scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="添加用户组" name="second">
                <div class="form">
                    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="用户组名" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="描述" prop="describle">
                            <el-input type="textarea" v-model="ruleForm.describle"></el-input>
                        </el-form-item>
                        <el-form-item label="状态" prop="status">
                            <el-radio-group v-model="ruleForm.status">
                                  <el-radio :label="1">启用</el-radio>
                                  <el-radio :label="2">禁用</el-radio>
                                </el-radio-group>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                            <el-button  @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-tab-pane>
        </el-tabs>
        <el-dialog title="编辑用户组" :visible.sync="dialogFormVisible" width="500px" center >
            <div class="form">
                <el-form :model="ruleForm">
                    <el-form-item label="用户组名" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="描述" prop="describle">
                        <el-input v-model="ruleForm.describle" type="textarea"></el-input>
                    </el-form-item>
                    <el-form-item label="状态" prop="status">
                        <el-radio-group v-model="ruleForm.status">
                                <el-radio :label="1">启用</el-radio>
                                <el-radio :label="2">禁用</el-radio>
                            </el-radio-group>
                    </el-form-item>
                </el-form>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="back('ruleForm')">取 消</el-button>
                <el-button type="primary" @click="update('ruleForm')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import Axios from 'Axios'
    import qs from 'qs'
    export default {
        data() {
            return {
                activeTab: 'first',
                tableData: null,
                ruleForm: {
                    name: '',
                    describle: '',
                    status: 0
                },
                dialogFormVisible: false
            }
        },
        mounted(){
            this.$nextTick(()=>{
                this.getGroupList();
            })
        },
        methods: {
            getGroupList(){
                Axios.get('/api/group/getGroupList')
                    .then((res) => {
                        console.log(res)
                        this.tableData = res.data.data;
                    })
            },
            submitForm(formName){
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        Axios.post('/api/group/addGroup',this.ruleForm)
                            .then((res) => {
                                console.log(res)
                                if(res.data.success === true){
                                    this.$message({
                                        showClose: true,
                                        message: res.data.message,
                                        type: 'success',
                                        center: true
                                    })
                                    this.resetForm(formName)
                                }
                            })
                            .catch(err => console.log(err))
                    }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            editGroupInfo(row){
                this.dialogFormVisible = true;
                this.ruleForm.name = row.name;
                this.ruleForm.describle = row.describle;
                this.ruleForm.status = row.status;
                this.ruleForm.id = row.id;
            },
            delGroupInfo(row) {
                let data = {
                    id: row.id
                }
                this.$confirm('此操作将永久删除用户组，是否继续？','提示',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    Axios.post('/api/group/deleteGroupInfo',data)
                        .then((res) => {
                            if(res.status === 200){
                                this.$message({
                                    showClose: true,
                                    type: 'success',
                                    message: '删除成功！',
                                    center: true
                                })
                                this.getGroupList()
                            }
                        })
                }).catch(() => {
                    this.$message({
                        showClose: true,
                        type: 'info',
                        message: '已取消删除',
                        center: true
                    })
                })
                
            },
            update(formName){
                this.$refs[formName].validate((valid)=>{
                    if(valid){
                        Axios.post('/api/group/updateGroupInfo',this.ruleForm)
                            .then((res) =>{
                                if(res.status === 200){
                                    this.$message({
                                        showClose: true,
                                        message: res.data.messge,
                                        center: true,
                                        type: 'success'
                                    })
                                    this.getGroupList()
                                }
                                this.dialogFormVisible = false
                            })
                    }
                })
            },
            back(formName){
                this.$refs[formName].resetFields();
                this.dialogFormVisible = false;
            }
        }
    }
</script>

<style scoped lang="stylus">
    .form
        width:400px
        margin: 50px auto
</style>