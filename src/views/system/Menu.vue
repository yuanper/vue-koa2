<template>
        <div>
            <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
                <el-tab-pane label="菜单列表" name="first">
                    <div class="search-box">
                        <el-input v-model="searchKey" placeholder="请输入查询关键字" size="small" class="search-input"></el-input>
                        <el-button type="danger" size="small">搜索</el-button>
                    </div>
                    <div class="table">
                        <el-table :data="tableData" style="width: 100%" >
                          <el-table-column label="ID" width="80" prop="id" align="center"></el-table-column>
                          <el-table-column label="标题"  prop="title" align="center"></el-table-column>
                          <el-table-column label="URL"  prop="url" align="center"></el-table-column>
                          <el-table-column label="图标"  prop="icon" align="center"></el-table-column>
                          <el-table-column label="排序"  prop="sort" align="center"></el-table-column>
                          <el-table-column label="创建时间"  prop="create_time" align="center"></el-table-column>
                          <el-table-column label="状态"  prop="status" align="center">
                              <template slot-scope="scope">
                                  <span v-show="scope.row.status === 1">显示</span>
                                  <span v-show="scope.row.status === 2">隐藏</span>
                              </template>
                          </el-table-column>
                          <el-table-column label="操作"  align="center">
                              <template slot-scope="scope">
                                  <el-button type="text" size="small" @click="editMenuInfo(scope.row)">编辑</el-button>
                                  <el-button type="text" size="small" @click="delMenuInfo(scope.row)">删除</el-button>
                              </template>
                          </el-table-column>
                        </el-table>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="添加菜单" name="second">
                    <div class="form">
                        <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="标题" prop="title" >
                                <el-input v-model="ruleForm.title" auto-complete="off" type="text"></el-input>
                            </el-form-item>
                            <el-form-item label="URL" prop="url">
                                <el-input v-model="ruleForm.url" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="图标" prop="icon">
                                <el-input  v-model="ruleForm.icon" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="上级菜单" >
                                <el-input auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="排序" prop="sort">
                                <el-input v-model="ruleForm.sort" ></el-input>
                            </el-form-item>
                            <el-form-item label="状态" prop="status">
                                <el-radio-group v-model="ruleForm.status">
                                  <el-radio label="1">显示</el-radio>
                                  <el-radio label="2">隐藏</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                                <el-button @click="resetForm('ruleForm')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-tab-pane>
            </el-tabs>
            <el-dialog title="修改菜单"
                :visible.sync="editDialogVisible"
                width="500px"
                center>
                <div class="form">
                    <el-form :model="ruleForm" label-width="100px">
                        <el-form-item label="标题" prop="title" >
                            <el-input v-model="ruleForm.title" auto-complete="off" type="text"></el-input>
                        </el-form-item>
                        <el-form-item label="URL" prop="url">
                            <el-input v-model="ruleForm.url" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="图标" prop="icon">
                            <el-input  v-model="ruleForm.icon" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="上级菜单" >
                            <el-input auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="排序" prop="sort">
                            <el-input v-model="ruleForm.sort" ></el-input>
                        </el-form-item>
                        <el-form-item label="状态">
                            <el-radio-group v-model="ruleForm.status">
                                <el-radio :label="1">显示</el-radio>
                                <el-radio :label="2">隐藏</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-form>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="closeDialog">取消</el-button>
                    <el-button @click="confirmEdit('ruleForm')" type="primary">确定</el-button>
                </span>
            </el-dialog>
        </div>
</template>
<script type="text/javascript">
    import Axios from 'Axios'
    export default {
        data() {
            return {
                activeTab: 'first',
                searchKey: '',
                tableData: null,
                ruleForm: {
                    title: '',
                    url: '',
                    icon: '',
                    sort: '',
                    status: ''
                },
                editDialogVisible: false
            }
        },
        mounted(){
            this.$nextTick(() => {
                this.getMenuList()
            })
        },
        methods: {
            handleClick(tab,event){
                console.log(tab)
            },
            getMenuList(){
                Axios.get('/api/menu/getmenulist')
                    .then((res) => {
                        if(res.status === 200){
                            this.tableData = res.data.data
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if(valid) {
                        Axios.post('/api/menu/addnewmenu',this.ruleForm)
                            .then((res) => {
                                if(res.status === 200){
                                    this.$message({
                                        showClose: true,
                                        message: res.data.message,
                                        center: true,
                                        type: 'success'
                                    })
                                    this.resetForm(formName)
                                }
                            })
                    }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            editMenuInfo(row){
                this.editDialogVisible = true;
                this.ruleForm.title = row.title;
                this.ruleForm.url = row.url;
                this.ruleForm.icon = row.icon;
                this.ruleForm.sort = row.sort;
                this.ruleForm.status = row.status;
                this.ruleForm.id = row.id;
            },
            delMenuInfo(row){
                let data = {
                    id: row.id
                };
                this.$confirm('此操作将会永久删除此菜单信息，是否继续？','提示',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    Axios.post('/api/menu/deletemenuinfo',data)
                        .then((res) => {
                            if(res.status === 200){
                                this.$message({
                                    showClose: true,
                                    message: res.data.message,
                                    center: true,
                                    type: 'success'
                                })
                                this.getMenuList()
                            }
                        }).catch((err) => {
                            console.log(err)
                        })
                }).catch(() => {
                    this.$message({
                        showClose: true,
                        type: 'info',
                        message: '已取消删除！',
                        center: true
                    })
                })
            },
            closeDialog(){
                this.editDialogVisible = false;
            },
            confirmEdit(formName){
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        Axios.post('/api/menu/updatemenuinfo',this.ruleForm)
                            .then((res) => {
                                if(res.status === 200){
                                    this.editDialogVisible = false;
                                    this.$message({
                                        showClose: true,
                                        type: 'success',
                                        message: res.data.message,
                                        center: true
                                    })
                                    this.getMenuList()
                                }
                            }).catch((err) => {
                                console.log(err)
                            })
                    }
                })
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