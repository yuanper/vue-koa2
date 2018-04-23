<template>
    <div>
        <div class="upload-area">
            <el-button type="danger">点击上传主题</el-button>
            <input type="file" name="file" id="upload"/>
            <p>或将主题拖到这里</p>
            <p>上传注意事项：允许上传的主题格式为：GNZ，单次只可上传一个主题</p>
        </div>
        <div class="table">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column label="名称" prop="name"></el-table-column>
              <el-table-column label="大小" prop="size"></el-table-column>
              <el-table-column label="状态" prop="status"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [
                    {
                        name: '',
                        size: '',
                        status: ''
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>