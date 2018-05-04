<template>
    <div class="sign">
        <div class="inner">
            <div class="form">
                <div class="header-logo"></div>
                <div class="content">
                    <div class="sign-login">
                        <div class="login-button" v-bind:class="{active: isLogin}" @click="login">登录</div>
                        <div class="sign-button" v-bind:class="{active: !isLogin}" @click="sign">注册</div>
                    </div>
                    <div>
                        <div class="phonenum">
                            <el-input v-model="userName" placeholder="请输入用户名"  clearable ></el-input>
                        </div>
                        <el-input v-model="password" placeholder="请输入密码" type="password" clearable ></el-input>
                        <div class="tips" v-show="isLogin">
                            <el-checkbox label="十天内免登陆" v-model="checked"></el-checkbox>
                            <span class="forget-password">忘记密码？</span>
                        </div>
                        <div class="confirm" v-if="isLogin" @click="submit">立即登录</div>
                        <div class="confirm" v-if="!isLogin" @click="signup">注册</div>
                    </div>
                </div>
            </div>
        </div>
    </div>   
</template>
<script type="text/javascript">
    import Axios from 'Axios'
    import qs from 'qs'
    export default {
        data(){
            return {
                userName: '',
                password: '',
                isLogin: true,
                checked: false
            }
        },
        methods: {
            login(){
                this.isLogin = true;
            },
            sign(){
                this.isLogin = false;
            },
            submit(){
                let data = {
                    userName: this.userName,
                    password: this.password
                }
                console.log(qs.stringify(data))
                Axios.get('/api/user/login?'+qs.stringify(data))
                    .then((res) => {
                        console.log(res)
                        if(res.status === 200){
                            localStorage.setItem('userType',res.data.userType);
                            localStorage.setItem('userName',res.data.userName);
                            this.$router.push('/Admin/system/user')
                        }
                    })
            },
            signup(){
                let data = {
                    userName: this.userName,
                    password: this.password
                }
                console.log(qs.stringify(data))
                Axios.get('/api/user/sign'+ '?' +qs.stringify(data))
                    .then((res)=>{
                        console.log(res)
                    }).catch((err) =>{
                        console.log(err)
                    })
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .sign
        overflow: hidden
        height: 100%
        width: 100%
        min-width: 1066px
        background: url('../assets/image/login/pic.png') no-repeat 50%
        .inner
            width: 1066px
            height: 715px
            margin: 0 auto
            background: url('../assets/image/login/word.png') no-repeat 94px 154px
            .form
                display: inline-block
                margin: 105px 0 0 689px
                border: 1px solid #dedede
                border-radius: 2px;
                box-shadow: 2px 2px 5px #ddd
                width: 343px
                height: 520px
                .header-logo
                    width: 110px
                    height: 110px
                    margin: 30px auto 20px
                    background: url('../assets/image/login/logo.png') no-repeat 100% 100%
                .content
                    width: 80%
                    margin: 0 auto
                    .sign-login
                        margin-bottom: 50px
                        height: 26px
                        line-height: 26px
                        color: #888
                        font-size: 20px
                        .active
                            color: #ff9000
                        .login-button
                            display: inline-block
                            margin-left: 10px;
                            cursor: pointer
                        .sign-button
                            display: inline-block
                            float: right
                            margin-right: 10px
                            cursor: pointer
                    .phonenum
                        margin-bottom: 20px
                    .tips
                        margin-top: 40px
                        font-size: 14px
                        color: #888
                        .forget-password
                            display: inline-block
                            float: right
                            cursor: pointer
                    .confirm
                        margin: 40px auto
                        width: 280px
                        height: 46px
                        border: none
                        border-radius: 5px
                        background: url('../assets/image/login/button.png') no-repeat 50%
                        font-size: 18px
                        color: #fff
                        text-align: center
                        line-height: 46px
                        cursor: pointer
</style>