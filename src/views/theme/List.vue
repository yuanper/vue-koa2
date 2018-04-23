<template>
    <div>
        <div class="status-list list">
            <label>状态</label>
            <el-button type="primary">全部</el-button>
            <el-button >已提交</el-button>
            <el-button >未通过</el-button>
            <el-button >已通过</el-button>
            <el-button >已上架</el-button>
            <el-button >已下架</el-button>
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
              <el-table-column label="主题" prop="package" align="center" width="150"></el-table-column>
              <el-table-column label="名称" prop="name" align="center" ></el-table-column>
              <el-table-column label="英文名" prop="englishName" align="center" ></el-table-column>
              <el-table-column label="标签" prop="label" align="center" ></el-table-column>
              <el-table-column label="定价" prop="price" align="center" width="50"></el-table-column>
              <el-table-column label="打包时间" prop="packageTime" align="center"></el-table-column>
              <el-table-column label="上架时间" prop="onShelves" align="center"></el-table-column>
              <el-table-column label="包类" prop="packageType" align="center" width="50"></el-table-column>
              <el-table-column label="操作"  align="center" ></el-table-column>
              <el-table-column label="状态" prop="status" align="center" ></el-table-column>
              <el-table-column label="下载量" prop="downloadNum" align="center" width="100"></el-table-column>
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
                        englishName: 'Lotus pond of night',
                        label: '炫酷个性',
                        price: '免费',
                        packageTime: '2017-11-21',
                        onShelves: '2017-11-21',
                        packageType: 'V2',
                        status: '已提交',
                        downloadNum: 0
                    },
                    {
                        package: '',
                        name: '荷塘月色',
                        englishName: 'Lotus pond of night',
                        label: '炫酷个性',
                        price: '免费',
                        packageTime: '2017-11-21',
                        onShelves: '2017-11-21',
                        packageType: 'V2',
                        status: '已提交',
                        downloadNum: 0
                    }
                ]
            }
        },
    }
</script>

<style scoped lang="stylus">
    .list
        padding: 10px
        label
            display: inline-block
            margin-right: 20px
        .search-input
            width: 280px
</style>