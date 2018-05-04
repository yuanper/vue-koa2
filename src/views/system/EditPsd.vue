<template>
    <div class="form">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
          <el-form-item label="当前密码" prop="currentPassword">
              <el-input v-model="ruleForm.currentPassword" type="password"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPassword">
              <el-input v-model="ruleForm.newPassword" type="password"></el-input>
          </el-form-item>
          <el-form-item label="重复密码" prop="repeatPassword">
              <el-input v-model="ruleForm.repeatPassword" type="password"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            let currentPswCheck = (rule,value,callback) => {
                if(value === ''){
                    callback(new Error('请输入当前密码'))
                }
            };
            let newPsdCheck = (rule,value,callback) => {
                if(value === ''){
                    callback(new Error('请输入密码'))
                }else{
                    if(this.ruleForm.repeatPassword !== ''){
                        this.$refs.ruleForm.validateField('repeatPassword')
                    }
                    callback()
                }
            };
            let repeatPsdCheck = (rule,value,callback) => {
                if(value === ''){
                    callback(new Error('请再次输入密码'))
                }else if(value !== this.ruleForm.newPassword){
                    callback(new Error('两次输入的密码不一致'))
                }else{
                    callback()
                }
            }
            return {
                ruleForm: {
                    currentPassword: '',
                    newPassword: '',
                    repeatPassword: ''
                },
                rules: {
                    currentPassword: [
                        {validator: currentPswCheck,trigger: 'blur'}
                    ],
                    newPassWord: [
                        {validator: newPsdCheck,trigger: 'blur'}
                    ],
                    repeatPassword: [
                        {validator: repeatPsdCheck,trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                
            }
        },
    }
</script>

<style scoped>
    .form{
        width: 400px;
        margin: 50px auto;
    }
</style>