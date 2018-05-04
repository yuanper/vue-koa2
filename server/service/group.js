/**
 * 用户组业务层操作
 */
const groupModel = require('./../model/group')

const group = {
    /**
     * 新增用户组
     * @param {object}
     * @returns {object}
     */
    async addGroup(params){
        let result = await groupModel.addGroup(params);
        return result
    },

    /**
     * 查找是否已经存在此用户组
     * @param {object} name
     * @returns {object} 查找结果
     */
    async groupIsExist(params){
        let result = await groupModel.groupIsExist(params);
        return result;
    },
    /**
     * 获取用户组列表
     * @param null
     * @returns {object|null} 返回用户组列表
     */
    async getGroupList() {
        let result = await groupModel.getGroupList();
        return result
    },
    /**
     * 修改用户组信息
     * @param {object}
     * @returns {object}
     */
    async updateGroupInfo(params) {
        let result = await groupModel.updateGroupInfo(params);
        return result;
    },
    /**
     * 删除用户组信息
     * @param {object} id
     * @returns {object}
     */
    async deleteGroupInfo(params) {
        let result = await groupModel.deleteGroupInfo(params);
        return result;
    },
}

module.exports = group