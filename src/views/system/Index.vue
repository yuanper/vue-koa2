<template>
    <div class="container">
        <div class="nav-left" id="nav-left" @click="leftMenuActive($event)">            
            <div class="nav-list" data-id="user"><i><img src="./../../assets/image/main/menu25.png"/></i><router-link to="user">用户管理</router-link></div>
            <div class="nav-list" data-id="group"><i><img src="./../../assets/image/main/menu27.png"/></i><router-link to="group">用户组管理</router-link></div>
            <div class="nav-list" data-id="menu"><i><img src="./../../assets/image/main/menu7.png"/></i><router-link to="menu">菜单管理</router-link></div>
            <div class="nav-list" data-id="editpsd"><i><img src="./../../assets/image/main/menu28.png"/></i><router-link to="editpsd">修改密码</router-link></div>
            <div class="nav-list" data-id="cache"><i><img src="./../../assets/image/main/menu36.png"/></i><router-link to="cache">缓存管理</router-link></div>
            <div class="nav-list" data-id="config"><i><img src="./../../assets/image/main/menu8.png"/></i><router-link to="config">配置管理</router-link></div>            
        </div>
        <div class="nav-right">
            <router-view />
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
        data() {
            return {
               
            }
        },
        methods: {
            leftMenuActive(e) {               
                let ev = e || window.event;
                let target = ev.target || ev.srcElement;
                if(target.nodeName.toLocaleLowerCase() == 'a'){
                    console.log(target.parentNode.getAttribute('data-id'))
                    let navName = target.parentNode.getAttribute('data-id');
                    switch(navName){
                        case 'user':
                            
                    }
                }              
            },
            addClass(){

            }
        },
    }
</script>
<style lang="stylus" scoped>
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
            .router-link-active
                color: #fe7735
</style>