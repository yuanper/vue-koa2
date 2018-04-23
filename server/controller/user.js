const userService = require('./../service/user')

module.exports = {
    /**
     * 注册操作
     * @param {object} ctx上下文操作对象
     */
    async sign(ctx){
        let data = ctx.request.query;
        let result = {
            success: false,
            message: '',
            data: null
        };
        let existOne = await userService.userIsExist(data);
        if(existOne){
            if(existOne.user_name === data.userName){
                result.message = '用户名已被注册';
                ctx.body = result;
                return
            }
        }
        let userResult = await userService.createUser({
            user_name: data.userName,
            password: data.password,
            create_time: new Date().getTime()
        })
        console.log(userResult)
        if(userResult && userResult.insertId >0){
            result.success = true
        }else{
            result.message = '系统错误'
        }
        ctx.body = result
    },
    /**
     * 登录操作
     * @param {object} ctx 上下文对象
     */
    async login(ctx){
        let data = ctx.request.body;
        let result = {
            success: false,
            message: '',
            data: null,
            code: ''
        };
        let userResult = await userService.login(data);
        if (userResult) {
            if(userResult.user_name === data.userName){
                result.success = true;
            }else{
                result.message = '用户名或者密码错误';
                result.code = '用户名或者密码错误'
            }
        } else {
            result.code = '用户名不存在'
            result.message = '用户名不存在'
        }
        if(result.success = true){
            // let session = ctx.session;
            // session.isLogin = true;
            // session.userName = userResult.user_name;
            // session.userId = userResult.id;
            // ctx.redirect('/user')
            console.log('nice')
        }else{
            ctx.body = result
        }
    }
}