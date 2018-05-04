<template>
    <div class="label-manage">
        <el-tabs type="card">
          <el-tab-pane label="一级标签">
              <el-button type="danger">新增标签</el-button>
              <div class="table">
                  <el-table :data="tableData" style="width: 100%">
                    <el-table-column label="标签名称" prop="name"></el-table-column>
                    <el-table-column label="排序" prop="sort"></el-table-column>
                    <el-table-column label="标签预览图" prop="previewImg"></el-table-column>
                    <el-table-column label="操作"></el-table-column>
                  </el-table>
              </div>
          </el-tab-pane>
          <el-tab-pane label="二级标签">
               <div class="status-list list">
                    <label>维度</label>
                    <el-button type="primary">全部</el-button>
                    <el-button >颜色</el-button>
                    <el-button >形状</el-button>
                    <el-button >风格</el-button>
                    <el-button >艺术手法</el-button>
                    <el-button >系列</el-button>
                    <el-button >其他</el-button>
                </div>
                <el-button type="danger">新增标签</el-button>
                <div class="table">
                    <el-table :data="tableData1" style="width: 100%">
                        <el-table-column label="标签名称" prop="name"></el-table-column>
                        <el-table-column label="排序" prop="sort"></el-table-column>
                        <el-table-column label="维度" prop="dimension"></el-table-column>
                        <el-table-column label="操作"></el-table-column>
                    </el-table>
                </div>
          </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [
                    {
                        name: '天气主题_h5',
                        sort: 9,
                        previewImg: ''
                    },
                    {
                        name: '天气主题_h5',
                        sort: 9,
                        previewImg: ''
                    }
                ],
                tableData1: [
                    {
                        name: '天气主题_h5',
                        sort: 9,
                        dimension: '系列'
                    },
                    {
                        name: '天气主题_h5',
                        sort: 9,
                        dimension: '形状'
                    }
                ]
            }
        },
    }
</script>

<style scoped lang="stylus">
    .list
        display: inline-block
</style>