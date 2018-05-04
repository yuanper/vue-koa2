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
        let userResult = await userService.createUser(data)
        console.log(userResult)
        if(userResult && userResult.insertId >0){
            result.success = true
            result.message = '新增成功'
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
        let data = ctx.request.query;
        let result = {
            success: false,
            message: '',
            userType:'',
            userName: '',
            code: ''
        };
        let userResult = await userService.login(data);
        console.log(userResult)
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
            result.userType = userResult.user_type;
            result.userName = userResult.user_name;
            return ctx.body = result;
        }else{
            ctx.body = result
        }
    },
    /**
     * 获取所有用户信息
     */
    async getAllUserInfo(ctx){
        let data = ctx.request.query;
        let userList = await userService.getAllUserInfo(data);
        console.log(userList);
        if(userList){
            ctx.body = userList
        }else{
            ctx.body = '未查询到用户信息'
        }
    },   
    /**
     * 修改用户信息
     */
    async updateUserInfo(ctx){
        let data = ctx.request.query;
        let result = await userService.updateUserInfo(data);
        if(result){
            ctx.body = result
        }else{
            ctx.body = '修改失败'
        }
    },
    /**
     * 删除用户信息
     * @param {object} id
     * @return {object} 返回删除结果
     */
    async deleteUserInfo(ctx){
        let data = ctx.request.body;
        let result = {
            success: false,
            message: '删除失败'
        }
        let delResult = await userService.deleteUserInfo(data);
        if (delResult){
            result.success = true,
            result.message = '删除成功'
            ctx.body = result
        }else{
            ctx.body = result
        }
    }
}