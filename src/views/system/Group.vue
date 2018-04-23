<template>
    <div>
        <el-tabs v-model="activeTab" type="card">
            <el-tab-pane label="用户组列表" name="first">
                <div class="table">
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column label="用户组ID" prop="id" align="center" width="100"></el-table-column>
                        <el-table-column label="用户组名称" prop="teamName" align="center" ></el-table-column>
                        <el-table-column label="描述" prop="describle" align="center" ></el-table-column>
                        <el-table-column label="状态" prop="status" align="center" ></el-table-column>
                        <el-table-column label="操作"  align="center" ></el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="添加用户组" name="second">
                <div class="form">
                    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="用户组名" prop="teamName">
                            <el-input v-model="ruleForm.teamName"></el-input>
                        </el-form-item>
                        <el-form-item label="描述" prop="describle">
                            <el-input type="textarea" v-model="ruleForm.describle"></el-input>
                        </el-form-item>
                        <el-form-item label="状态" prop="status">
                            <el-switch  v-model="ruleForm.status"></el-switch>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                            <el-button  @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeTab: 'first',
                tableData: [
                    {
                        id: 1,
                        teamName: '设计师',
                        describle: '设计师',
                        status: '启用',
                    },
                    {
                        id: 2,
                        teamName: '设计师',
                        describle: '设计师',
                        status: '启用',
                    }
                ],
                ruleForm: {
                    teamName: '',
                    describle: '',
                    status: false
                }
            }
        },
        methods: {
            submitForm(formName){

            },
            resetForm(formName) {

            }
        }
    }
</script>

<style scoped lang="stylus">
    .form
        width:400px
        margin: 50px auto
</style>