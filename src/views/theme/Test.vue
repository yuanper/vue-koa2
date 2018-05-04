<template>
    <div class="test">
        <div class="status-list list">
            <label>一级标签</label>
            <el-button type="primary">全部</el-button>
            <el-button >天气主题_h5</el-button>
            <el-button >极简主义</el-button>
            <el-button >炫酷个性</el-button>
            <el-button >二次元</el-button>
            <el-button >可爱萌宠</el-button>
            <el-button >情感物语</el-button>
            <el-button >时光轴</el-button>
            <el-button >官方推荐</el-button>
            <el-button >清新文艺</el-button>
        </div>
        <div class="status-list list">
            <label>二级标签</label>
            <el-button type="primary">sssss</el-button>
            <el-button >时尚2017</el-button>
            <el-button >商务2017</el-button>
            <el-button >人物1</el-button>
            <el-button >情侣</el-button>
            <el-button >五颜六色</el-button>
            <el-button >帅哥</el-button>
            <el-button >白富美</el-button>
            <el-button >何弃疗</el-button>
            <el-button >腐女</el-button>
            <el-button >土豪</el-button>
            <el-button >小鲜肉</el-button>
            <el-button >青色</el-button>
            <el-button >彩色</el-button>
            <el-button >橙色</el-button>
        </div>
        <div class="list">
            <label>搜索</label>
            <el-input v-model="searchKey" class="search-input"></el-input>
            <el-radio-group v-model="type" fill="#FFB90F">
              <el-radio label="主题"></el-radio>
              <el-radio label="上传者"></el-radio>
            </el-radio-group>
            <el-button type="danger">搜索主题</el-button>
        </div>
        <div class="status-list list">
            <label>状态</label>
            <el-button type="primary">全部</el-button>
            <el-button >已提交</el-button>
            <el-button >未通过</el-button>
            <el-button >已通过</el-button>
            <el-button >上架</el-button>
            <el-button >下架</el-button>
        </div>
        <div class="status-list list">
            <label>类型</label>
            <el-button type="primary">全部</el-button>
            <el-button >收费</el-button>
            <el-button >免费</el-button>
        </div>
        <div class="table">
            <el-table :data="tableData" style="width:100%">
              <el-table-column label="主题" prop="package" align="center"></el-table-column>
              <el-table-column label="名称" prop="name" align="center" ></el-table-column>
              <el-table-column label="上传者" prop="author" align="center" ></el-table-column>
              <el-table-column label="一级标签" prop="firstLabel" align="center" ></el-table-column>
              <el-table-column label="二级标签" prop="secondLabel" align="center" ></el-table-column>
              <el-table-column label="定价" prop="price" align="center" width="50"></el-table-column>
              <el-table-column label="下载量" prop="downloadNum" align="center"></el-table-column>
              <el-table-column label="包类" prop="packageType" align="center"></el-table-column>
              <el-table-column label="上传时间" prop="createTime" align="center"></el-table-column>
              <el-table-column label="操作"  align="center" ></el-table-column>
              <el-table-column label="视觉" prop="vision" align="center" ></el-table-column>
              <el-table-column label="状态" prop="status" align="center" ></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchKey: '',
                type: '主题',
                tableData: [
                    {
                        package: '',
                        name: '荷塘月色',
                        autor: '卡拉',
                        firstLabel: '炫酷个性',
                        secondLabel: '炫酷个性',
                        price: '免费',
                        createTime: '2017-11-21',
                        packageType: 'V2',
                        status: '已提交',
                        downloadNum: 0,
                        vision: true
                    },
                    {
                        package: '',
                        name: '荷塘月色',
                        autor: '卡拉',
                        firstLabel: '炫酷个性',
                        secondLabel: '炫酷个性',
                        price: '免费',
                        createTime: '2017-11-21',
                        packageType: 'V2',
                        status: '已提交',
                        downloadNum: 0,
                        vision: true
                    },
                ]
            }
        },
    }
</script>

<style scoped lang="stylus">
    .list
        padding: 10px
        .el-button
            margin-bottom: 20px
        label
            display: inline-block
            margin-right: 20px
        .search-input
            width: 280px
</style>