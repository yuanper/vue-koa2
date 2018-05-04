<template>
        <div>
            <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
                <el-tab-pane label="用户列表" name="first">
                    <div class="search-box">
                        <el-input v-model="searchKey" placeholder="请输入查询关键字" size="small" class="search-input"></el-input>
                        <el-button type="danger" size="small" @click="searchUserInfo">搜索</el-button>
                    </div>
                    <div class="table">
                        <el-table :data="tableData" style="width: 100%" >
                          <el-table-column label="UID" width="80" prop="id" align="center"></el-table-column>
                          <el-table-column label="用户名"  prop="user_name" align="center"></el-table-column>
                          <el-table-column label="昵称"  prop="nickname" align="center"></el-table-column>
                          <el-table-column label="用户组"  prop="user_type" align="center"></el-table-column>
                          <el-table-column label="注册时间"  prop="create_time" align="center"></el-table-column>
                          <el-table-column label="状态"  prop="status" align="center">
                              <template slot-scope="scope">
                                  <span v-show="scope.row.status === 1">启用</span>
                                  <span v-show="scope.row.status === 2">禁用</span>
                              </template>
                          </el-table-column>
                          <el-table-column label="操作"  align="center">
                              <template slot-scope="scope">
                                  <el-button type="text" size="small" @click="editUserInfo(scope.row)">编辑</el-button>
                                  <el-button type="text" size="small" @click="deleteUserInfo(scope.row)">删除</el-button>
                              </template>
                          </el-table-column>
                        </el-table>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="添加用户" name="second">
                    <div class="form">
                        <el-form :model="userForm" status-icon :rules="rules2" ref="userForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="用户名" prop="userName" >
                                <el-input v-model="userForm.userName" auto-complete="off" type="text"></el-input>
                            </el-form-item>
                            <el-form-item label="用户邮箱" prop="email">
                                <el-input v-model="userForm.email" auto-complete="off" type="email"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="password">
                                <el-input type="password" v-model="userForm.password" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码" prop="checkPass">
                                <el-input type="password" v-model="userForm.checkPass" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="用户组">
                                <el-select v-model="userForm.userType" placeholder="请选择用户组">
                                  <el-option label="设计师" value="设计师"></el-option>
                                  <el-option label="测试" value="测试"></el-option>
                                  <el-option label="运营" value="运营"></el-option>
                                  <el-option label="财务" value="财务"></el-option>
                                  <el-option label="主题测试" value="主题测试"></el-option>
                                  <el-option label="资源运营" value="资源运营"></el-option>
                                  <el-option label="壁纸测试" value="壁纸测试"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="addUserInfo('userForm')">提交</el-button>
                                <el-button @click="resetForm('userForm')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-tab-pane>
            </el-tabs>
            <el-dialog title="编辑"
                :visible.sync="editDialogVisible"
                width="500px"
                center>
                <div class="form">
                        <el-form :model="userForm" status-icon :rules="rules2" ref="userForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="用户名" prop="userName" >
                                <el-input v-model="userForm.userName" auto-complete="off" type="text"></el-input>
                            </el-form-item>
                            <el-form-item label="用户邮箱" prop="email">
                                <el-input v-model="userForm.email" auto-complete="off" type="email"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="password">
                                <el-input type="password" v-model="userForm.password" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码" prop="checkPass">
                                <el-input type="password" v-model="userForm.checkPass" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="用户组">
                                <el-select v-model="userForm.userType" placeholder="请选择用户组">
                                  <el-option label="设计师" value="设计师"></el-option>
                                  <el-option label="测试" value="测试"></el-option>
                                  <el-option label="运营" value="运营"></el-option>
                                  <el-option label="财务" value="财务"></el-option>
                                  <el-option label="主题测试" value="主题测试"></el-option>
                                  <el-option label="资源运营" value="资源运营"></el-option>
                                  <el-option label="壁纸测试" value="壁纸测试"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="状态">
                                <el-radio-group v-model="userForm.status">
                                  <el-radio :label="1">启用</el-radio>
                                  <el-radio :label="2">禁用</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-form>
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="closeDialog">取消</el-button>
                        <el-button @click="submitForm('userForm')" type="primary">确定</el-button>
                    </span>
            </el-dialog>
        </div>
</template>
<script type="text/javascript">
    import Axios from 'Axios'
    import qs from 'qs'
    export default {
        data() {
            var userNamePass = (rule,value,callback) =>{
                if(value === ''){
                    callback(new Error('请输入用户名'))
                }
            };
            var validatePass = (rule,value,callback) => {
                if(value === '') {
                    callback(new Error('请输入密码'))
                }else{
                    if(this.userForm.checkPass !== ''){
                        this.$refs.userForm.validateField('checkPass')
                    }
                    callback()
                }
            };
            var validatePass2 = (rule, value, callback)=> {
                if(value === ''){
                    callback(new Error('请再次输入密码'))
                }else if(value !== this.userForm.password){
                    callback(new Error('两次输入的密码不一致'))
                }else{
                    callback()
                }
            }
            return {
                activeTab: 'first',
                searchKey: '',
                tableData: null,
                userForm: {
                    userName: '',
                    email: '',
                    password: '',
                    checkPass: '',
                    userType: '',
                    status: 0
                },
                rules2: {
                    userName: [
                        {validator: userNamePass,trigger: 'blur'}
                    ],
                    password: [
                        {validator: validatePass,trigger: 'blur'}
                    ],
                    checkPass: [
                        {validator: validatePass2,trigger: 'blur'}
                    ]
                },
                editDialogVisible: false
            }
        },
        mounted(){
            this.$nextTick(()=>{
                this.searchUserInfo()
            })
        },
        methods: {
            searchUserInfo(){
                let data = {
                    searchKey: this.searchKey
                }
                Axios.get('/api/user/getAllUserInfo?' + qs.stringify(data))
                    .then((res) =>{
                        this.tableData = res.data
                    })
                    .catch((err) =>{
                        console.log(err)
                    })
            },
            handleClick(tab,event){
                console.log(tab);
                if(tab.name === 'second'){
                    this.userForm.userName = '';
                    this.userForm.email = '';
                    this.userForm.password = '';
                    this.userForm.userType = '';
                    this.userForm.status = '';
                }
            },
            addUserInfo(formName){
                this.$refs[formName].validate((valid)=>{
                    if(valid){
                        Axios.get('/api/user/sign?'+qs.stringify(this.userForm))
                            .then((res) => {
                                console.log(res);
                                this.$message({
                                    showClose: true,
                                    message: res.data.message,
                                    type: 'success',
                                    center: true
                                });
                                if(res.data.success){
                                    this.userForm.userName = '';
                                    this.userForm.email = '';
                                    this.userForm.password = '';
                                    this.userForm.checkPass = '';
                                    this.userForm.userType = '';
                                    this.userForm.status = '';
                                }
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    }
                })
            },
            deleteUserInfo(row){
                let data = {
                    id: row.id
                }
                this.$confirm('此操作将永久删除此用户，是否继续？','提示',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    Axios.post('/api/user/deleteUserInfo',data)
                        .then((res) => {
                            this.$message({
                                showClose: true,
                                type: 'success',
                                message: '删除成功！',
                                center: true
                            })
                            this.searchUserInfo()
                        }).catch((err) => {
                            console.log(err)
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
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        Axios.get('/api/user/updateUserInfo?'+qs.stringify(this.userForm))
                            .then((res) => {
                                console.log(res);
                                this.searchUserInfo()
                                this.editDialogVisible = false;
                            }).catch((err) =>{
                                console.log(err)
                            })
                    }else{
                        console.log('error submit !')
                        return false
                    }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            editUserInfo(row){
                this.editDialogVisible = true;
                console.log(row);
                this.userForm.id = row.id;
                this.userForm.userName = row.user_name;
                this.userForm.email = row.email;
                this.userForm.password = row.password;
                this.userForm.userType = row.user_type;
                this.userForm.status = row.status;
            },
            closeDialog(){
                this.editDialogVisible = false
            }
        },
    }
</script>
<style lang="stylus">
    .search-input
        display: inline-block
        width: 200px
    .table
        margin-top: 20px
    .form
        width: 400px
        margin: 50px auto     
</style>