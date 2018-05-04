<template>
    <div>
        <div class="upload-area">
            <el-button type="danger">点击上传主题</el-button>
            <input type="file" name="file" id="upload"/>
            <p class="file-mind">或将主题拖到这里</p>
            <p class="file-tip">上传注意事项：允许上传的主题格式为：GNZ，单次只可上传一个主题</p>
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

<style scoped lang="stylus">
    .upload-area
        position: relative
        height: 150px
        padding-top: 20px
        border: 1px dotted #ccc
        text-align: center
        #upload
            display: inline-block;
            width: 126px;
            height: 40px;
            position: absolute;
            top: 20px;
            left: 45%;
            opacity: 0
        .file-mind
            color: #c6cace
            font-size: 12px
        .file-tip
            color: red
            font-size: 12px
</style>