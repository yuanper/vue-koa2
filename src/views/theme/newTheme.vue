<template>
    <div class="new-theme">
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
            <label>筛选</label>
            <el-button type="primary">全部</el-button>
            <el-button >收费</el-button>
            <el-button >免费</el-button>
        </div>
        <div class="list">
            <label>搜索</label>
            <el-input v-model="searchKey" class="search-input"></el-input>
            <el-button type="danger">搜索主题</el-button>
        </div>
        <div class="list">
            <label>搜索</label>
            <el-date-picker type="date" v-model="startDate" class="search-input" placeholder="请选择日期"></el-date-picker>
            -
            <el-date-picker type="date" v-model="endDate" class="search-input" placeholder="请选择日期"></el-date-picker>
            <el-button type="danger">搜索</el-button>
        </div>
        <div class="table">
            <el-table :data="tableData" style="width:100%">
              <el-table-column label="主题" prop="package" align="center"></el-table-column>
              <el-table-column label="名称" prop="name" align="center" ></el-table-column>
              <el-table-column label="作者" prop="author" align="center" ></el-table-column>
              <el-table-column label="下载量" prop="downloadNum" align="center"></el-table-column>
              <el-table-column label="包类" prop="packageType" align="center"></el-table-column>
              <el-table-column label="上架时间" prop="createTime" align="center"></el-table-column>
              <el-table-column label="状态" prop="status" align="center" ></el-table-column>
              <el-table-column label="价格" prop="price" align="center" ></el-table-column>
              <el-table-column label="序列号" prop="seriesNumber" align="center" ></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchKey: '',
                startDate: '',
                endDate: '',
                tableData: [
                    {
                        package: '',
                        name: '荷塘月色',
                        autor: '卡拉',
                        price: '4.99',
                        createTime: '2017-11-21',
                        packageType: 'V2',
                        status: '上架',
                        downloadNum: 0,
                        seriesNumber: 99
                    },
                    {
                        package: '',
                        name: '荷塘月色',
                        autor: '卡拉',
                        price: '4.99',
                        createTime: '2017-11-21',
                        packageType: 'V2',
                        status: '上架',
                        downloadNum: 0,
                        seriesNumber: 99
                    }
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