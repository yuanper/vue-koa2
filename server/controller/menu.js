/**
 * 菜单操作
 */

const menuService = require('./../service/menu')

const menu = {
    /**
     * @param {object} ctx 上下文对象
     * @returns {object|null} 返回给前端结果
     */
    async getMenuList(ctx){
        let result = {
            success: false,
            message: '',
            data: null
        }
        let menuList = await menuService.getMenuList();
        if(menuList){
            result.success = true;
            result.data = menuList;
        }else{
            result.success = true;
            result.message = '没有数据';
        }
        ctx.body = result
    },
    /**
     * 新增菜单
     * @param {object} ctx 
     */
    async addNewMenu(ctx){
        let data = ctx.request.body;
        let result = {
            success: false,
            message: '',
            data: null
        };
        let menuResult = await menuService.addNewMenu(data);
        if(menuResult && menuResult.insertId > 0){
            result.success = true;
            result.message = '新增成功';
        }else{
            result.message = '新增失败';
        }
        ctx.body = result
    },
    /**
     * 修改菜单
     * @param {object} ctx
     */
    async updateMenuInfo(ctx){
        let data = ctx.request.body;
        let result = {
            success: false,
            message: '',
            data: null
        }
        let updateResult = await menuService.updateMenuInfo(data);
        if (updateResult && updateResult.affectedRows> 0){
            result.success = true;
            result.message = '修改成功'
        }
        ctx.body = result
    },
    /**
     * 删除菜单信息
     * @param {object} ctx
     */
    async deleteMenuInfo(ctx){
        let data = ctx.request.body;
        let result = {
            success: false,
            message: '',
            data: null
        }
        let delResult = await menuService.deleteMenuInfo(data);
        if(delResult && delResult.affectedRows >0){
            result.success = true;
            result.message = '删除成功'
        }
        ctx.body = result
    }
}

module.exports = menu