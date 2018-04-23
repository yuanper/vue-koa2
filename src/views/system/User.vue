<template>
        <div>
            <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
                <el-tab-pane label="用户列表" name="first">
                    <div class="search-box">
                        <el-input v-model="searchKey" placeholder="请输入查询关键字" size="small" class="search-input"></el-input>
                        <el-button type="danger" size="small">搜索</el-button>
                    </div>
                    <div class="table">
                        <el-table :data="tableData" style="width: 100%" >
                          <el-table-column label="UID" width="80" prop="id" align="center"></el-table-column>
                          <el-table-column label="用户名"  prop="name" align="center"></el-table-column>
                          <el-table-column label="昵称"  prop="nickname" align="center"></el-table-column>
                          <el-table-column label="用户组"  prop="userGroup" align="center"></el-table-column>
                          <el-table-column label="注册时间"  prop="time" align="center"></el-table-column>
                          <el-table-column label="状态"  prop="status" align="center"></el-table-column>
                          <el-table-column label="操作"  align="center"></el-table-column>
                        </el-table>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="添加用户" name="second">
                    <div class="form">
                        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="用户名" prop="userName" >
                                <el-input v-model="ruleForm2.userName" auto-complete="off" type="text"></el-input>
                            </el-form-item>
                            <el-form-item label="用户邮箱" prop="email">
                                <el-input v-model="ruleForm2.email" auto-complete="off" type="email"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="pass">
                                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码" prop="checkPass">
                                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="用户组">
                                <el-select v-model="ruleForm2.group" placeholder="请选择用户组">
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
                                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                                <el-button @click="resetForm('ruleForm2')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
</template>
<script type="text/javascript">
    export default {
        data() {
            var validatePass = (rule,value,callback) => {
                if(value === '') {
                    callback(new Error('请输入密码'))
                }else{
                    if(this.ruleForm2.checkPass !== ''){
                        this.$refs.ruleForm2.validateField('checkPass')
                    }
                    callback()
                }
            };
            var validatePass2 = (rule, value, callback)=> {
                if(value === ''){
                    callback(new Error('请再次输入密码'))
                }else if(value !== this.ruleForm2.pass){
                    callback(new Error('两次输入的密码不一致'))
                }else{
                    callback()
                }
            }
            return {
                activeTab: 'first',
                searchKey: '',
                tableData: [
                    {
                        id: 1,
                        name: 'zengfp',
                        nickname: 'MR zeng',
                        userGroup: '超级管理员',
                        time: '2018-04-20 08:00',
                        status: '启用',
                    },
                    {
                        id: 2,
                        name: 'zengfp',
                        nickname: 'MR zeng',
                        userGroup: '超级管理员',
                        time: '2018-04-20 08:00',
                        status: '启用',
                    }
                ],
                ruleForm2: {
                    userName: '',
                    email: '',
                    pass: '',
                    checkPass: '',
                    group: ''
                },
                rules2: {
                    pass: [
                        {validator: validatePass,trigger: 'blur'}
                    ],
                    checkPass: [
                        {validator: validatePass2,trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleClick(tab,event){
                console.log(tab)
            },
            submitForm(formName) {

            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
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