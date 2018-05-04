/**
 * 控制层操作
 */

 const groupService = require('./../service/group')

 const group = {
     /**
      * 新增用户组
      * @param {object} ctx
      */
    async addGroup(ctx){
        let data = ctx.request.body;
        let result = {
            success: false,
            message: '',
            data: null
        };
        let existOne = await groupService.groupIsExist(data);//查询是否已存在此用户组
        if(existOne){
            if(existOne.name === data.name){
                result.message = '此用户组已被注册';
                ctx.body = result;
                return
            }
        }
        let groupResult = await groupService.addGroup(data);
        if(groupResult && groupResult.insertId > 0){
            result.success = true;
            result.message = '新增成功';

        }else{
            result.message = '系统错误'
        }
        ctx.body = result;
    },
    /**
     * 获取用户组信息列表
     * @param {object} ctx上下文
     */
    async getGroupList(ctx){
        let result = {
            success: false,
            message: '',
            data: null
        }
        let groupResult = await groupService.getGroupList();
        if(groupResult && groupResult.length >0){
            result.success = true;
            result.message = '获取成功';
            result.data = groupResult
        }else{
            result.success = true;
            result.data = null
        }
        ctx.body = result
    },
    /**
     * 修改用户组信息
     * @param {object} ctx
     */
    async updateGroupInfo(ctx){
        let data = ctx.request.body;//post请求
        let result = {
            success: false,
            message: '',
            data: null
        }
        let groupResult = await groupService.updateGroupInfo(data);
        if(groupResult.affectedRows > 0){
            result.success = true;
            result.message = '修改成功！'
        }else{
            result.message = '系统错误'
        }
        ctx.body = result
    },
    /**
     * 删除用户组信息
     * @param {object} ctx
     */
    async deleteGroupInfo(ctx){
        let data = ctx.request.body;
        let result = {
            success: false,
            message: '',
            data: null
        }
        let groupResult = await groupService.deleteGroupInfo(data);
        if(groupResult){
            result.success = true;
            result.message = '删除成功'
        }
        ctx.body = result
    }
 }

 module.exports = group