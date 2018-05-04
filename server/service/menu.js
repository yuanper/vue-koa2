/**
 * 菜单业务层操作
 */
const menuModel = require('./../model/menu')

const menu = {
    /**
     * 新增菜单
     * @param {object}
     * @returns {object}
     */
    async addNewMenu(params) {
        let result = await menuModel.addNewMenu(params);
        return result
    },
    /**
     * 获取菜单列表
     * @param null
     * @returns {object|null} 返回菜单列表
     */
    async getMenuList() {
        let result = await menuModel.getMenuList();
        return result
    },
    /**
     * 修改菜单信息
     * @param {object}
     * @returns {object}
     */
    async updateMenuInfo(params) {
        let result = await menuModel.updateMenuInfo(params);
        return result;
    },
    /**
     * 删除菜单信息
     * @param {object} id
     * @returns {object}
     */
    async deleteMenuInfo(params) {
        let result = await menuModel.deleteMenuInfo(params);
        return result;
    },
}

module.exports = menu