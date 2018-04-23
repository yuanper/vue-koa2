<template>
    <div class="form">
        <el-form :model="ruleForm" ref="ruleForm" label-width="100px">
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
            return {
                ruleForm: {
                    currentPassword: '',
                    newPassword: '',
                    repeatPassword: ''
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