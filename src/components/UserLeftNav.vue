<template>
    <div>
        <div class="nav-left">            
            <div class="nav-list"><i><img src="./../assets/image/main/menu25.png"/></i><router-link to="/Admin/System/User">用户管理</router-link></div>
            <div class="nav-list"><i><img src="./../assets/image/main/menu27.png"/></i><router-link to="/Admin/System/Group">用户组管理</router-link></div>
            <div class="nav-list"><i><img src="./../assets/image/main/menu7.png"/></i><router-link to="/Admin/System/Menu">菜单管理</router-link></div>
            <div class="nav-list"><i><img src="./../assets/image/main/menu28.png"/></i><router-link to="/Admin/System/EditPsd">修改密码</router-link></div>
            <div class="nav-list"><i><img src="./../assets/image/main/menu36.png"/></i><router-link to="/Admin/System/Cache">缓存管理</router-link></div>
            <div class="nav-list"><i><img src="./../assets/image/main/menu8.png"/></i><router-link to="/Admin/System/Config">配置管理</router-link></div>            
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="stylus">
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