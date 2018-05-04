<template>
    <div class="header">
        <div class="header-nav">
            <div class="header-nav-logo"></div>
            <div class="nav-list">
                <ul id="header-nav" @click="headerNav($event)">
                    <li><router-link to="/Admin/system/user" class="nav-title" exact>系统</router-link></li>
                    <li><router-link to="/Admin/theme/list" class="nav-title">主题</router-link></li>
                    <li><router-link to="/Admin/wallpaper/mywallpaper" class="nav-title">壁纸</router-link></li>
                    <li><router-link to="/Admin/wallpaperlive/index" class="nav-title">动态壁纸</router-link></li>
                    <li><router-link to="/Admin/Clockmy/index" class="nav-title">时钟</router-link></li>
                    <li><router-link to="/Admin/Font/index" class="nav-title">字体</router-link></li>
                    <li><router-link to="/Admin/Weather/index" class="nav-title">天气主题</router-link></li>
                    <li><router-link to="/Admin/Adspace/index" class="nav-title">广告</router-link></li>
                    <li><router-link to="/Admin/Allsubject/index" class="nav-title">专题</router-link></li>
                    <li><router-link to="/Admin/Pay/index" class="nav-title">结算中心</router-link></li>
                    <li><router-link to="/Admin/Client/startpage" class="nav-title">其他</router-link></li>
                    <li><router-link to="/Admin/HelpCenters/designV2" class="nav-title">帮助中心</router-link></li>                   
                </ul>
            </div>
            <div class="login-info">
                <div class="type-choose">
                    <el-select v-model="type" placeholder="请选择" size="small">
                        <el-option 
                            v-for="item in typeOptions" 
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </div>
                <div class="user-img"></div>
                <div class="user-name">{{userType}}：{{userName}}</div>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <div class="msg_icon"></div>
                    </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人资料</el-dropdown-item>
                    <el-dropdown-item>我的消息</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <div class="message"></div>
            </div>
        </div>
        <div class="nav-bottom-img"></div>
    </div>   
</template>
<script type="text/javascript">
    export default {
        data(){
            return {
                userType: '',
                userName: '',
                typeOptions: [
                    {
                        value: '选项一',
                        label: '稳重型'
                    },
                    {
                        value: '选项二',
                        label: '时尚型'
                    },
                    {
                        value: '选项三',
                        label: '商务机'
                    },
                ],
                type: '稳重型'
            }
        },
        mounted(){
            this.$nextTick(()=>{
                this.userType = localStorage.getItem('userType');
                this.userName = localStorage.getItem('userName');
            })
        },
        methods: {
            headerNav(ev) {
                
            }
        },
    }
</script>
<style lang="stylus" scoped>
    .header
        position: absolute
        top: 0
        left: 0
        z-index: 10
        width: 100%
        height: 64px
        min-width: 1440px
        .header-nav
            height: 64px
            background: url('./../assets/image/main/topbg.png') 72% center no-repeat
            background-size: 32.39rem
            .header-nav-logo
                display: inline-block
                height: 64px
                width: 224px
                background: url('./../assets/image/main/nav_top_logo.png') no-repeat
                background-size: 75%
            .nav-list
                display: inline-block
                height: 64px
                vertical-align: top
                ul
                    margin: 0
                    padding: 0
                li
                    display: inline-block
                    text-decoration: none
                    list-style: none
                    height: 64px
                    line-height: 64px
                    font-size: 16px
                    padding: 0 0.525rem
                    .nav-title
                        color: #000
                        text-decoration: none
                    .router-link-active
                        color: #fe7735 
            .login-info
                display:inline-block
                vertical-align: top
                line-height: 64px
                .type-choose
                    display: inline-block
                    width: 85px
                    line-height: 64px
                .user-img
                    border-radius: 50px;
                    vertical-align: middle;
                    display: inline-block
                    width: 40px;
                    height: 40px;
                    box-shadow: 0 0 0 1px #07ac74;
                    background: url('./../assets/image/main/icon_1.jpeg') no-repeat
                .user-name
                    display: inline-block
                    font-size: 14px
                    color: #07ac74
                .msg_icon
                    display: inline-block
                    width: 32px
                    height: 32px
                    vertical-align: middle
                    cursor: pointer
                    background: url('./../assets/image/main/msg_icon.png') no-repeat
                .message
                    display: inline-block
                    width: 32px
                    height: 32px
                    vertical-align: middle
                    cursor: pointer
                    background: url('./../assets/image/main/message.png') no-repeat
        .nav-bottom-img
            height: 1px
            background: url('./../assets/image/main/nav_bottom_img.png') 
</style>