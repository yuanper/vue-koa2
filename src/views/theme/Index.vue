<template>
    <div class="container">
        <div class="nav-left">            
            <div class="nav-list"><i><img src="./../../assets/image/theme/menu1.png"/></i><router-link to="/Admin/theme/list">我的主题</router-link></div>
            <div class="nav-list"><i><img src="./../../assets/image/theme/menu9.png"/></i><router-link to="/Admin/theme/fileupdate">我的更新包</router-link></div>
            <div class="nav-list"><i><img src="./../../assets/image/theme/menu3.png"/></i><router-link to="/Admin/theme/fileupload">上传主题</router-link></div>
            <div class="nav-list"><i><img src="./../../assets/image/theme/menu34.png"/></i><router-link to="/Admin/theme/test">主题测试</router-link></div>
            <div class="nav-list"><i><img src="./../../assets/image/theme/menu7.png"/></i><router-link to="/Admin/theme/resource">资源管理</router-link></div>
            <div class="nav-list"><i><img src="./../../assets/image/theme/menu4.png"/></i><router-link to="/Admin/theme/newtheme">新品推荐</router-link></div>            
            <div class="nav-list"><i><img src="./../../assets/image/theme/menu2.png"/></i><router-link to="/Admin/theme/label">标签管理</router-link></div>            
            <div class="nav-list"><i><img src="./../../assets/image/theme/menu9.png"/></i><router-link to="/Admin/theme/upNew">主题上新</router-link></div>            
            <div class="nav-list"><i><img src="./../../assets/image/theme/menu10.png"/></i><router-link to="/Admin/theme/hotwords">搜索热词</router-link></div>            
            <div class="nav-list"><i><img src="./../../assets/image/theme/menu11.png"/></i><router-link to="/Admin/theme/hottheme">热门主题</router-link></div>            
        </div>
        <div class="nav-right">
            <router-view />
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="stylus">
    .container
        display: flex
        flex: 1
        .nav-right
            margin-top: 10px
            flex:1 
    .nav-left
        width: 210px;
        display: inline-block;
        font-size: 16px;
        overflow-y: auto;
        height:687px
        min-height: 687px
        .nav-list
            height: 50px
            line-height: 50px
            i
                display: inline-block;
                padding: 0 10px 0 40px;
                img
                    width: 26px;
                    vertical-align: middle;
            a
                text-decoration: none
                color: #000
</style>