/**
 * 用户业务层操作
 */
const userModel = require('./../model/user')

const user = {
    /**
     * 创建用户
     * @param {object} params 用户信息 name,password
     * @returns {object} 创建的结果
     */
    async createUser(params){
        let result = await userModel.createUser(params)
        return result
    },

    /**
     * 查找是否存在此用户
     * @param {object} params 查找的根据 name
     * @returns {object|null} 查找结果
     */
    async userIsExist(params){
        let result = await userModel.userIsExist(params)
        return result
    },

    /**
     * 登录业务操作
     * @param {object} params 用户信息name password
     * @returns {object} 返回结果
     */
    async login(params){
        let result = await userModel.getUserByNameAndPassword(params)
        return result
    },
    /**
     * 根据用户名查找用户信息
     * @param {string} userName 用户名
     * @returns {object|null} 返回结果
     */
    async getUserInfoByUserName(userName){
        let result = await userModel.getUserInfoByUserName(userName) || {}
        let userInfo = {
            email: result.email,
            userName: result.user_name,
            createTime: result.create_time
        }
        return userInfo
    },
    /**
     * 获取所有用户信息
     * @param {object|null}
     * @return {object}
     */
    async getAllUserInfo(params){
        let result = await userModel.getAllUserInfo(params);
        return result;
    },
    /**
     * 修改用户信息
     * @param {object|null}
     * @return {object|null}
     */
    async updateUserInfo(params){
        let result = await userModel.updateUserInfo(params);
        return result
    },
    
    /**
     * 删除用户信息
     * @param {object} id
     * @return {object}
     */
    async deleteUserInfo(params){
        let result = await userModel.deleteUserInfo(params);
        return result
    }
}

module.exports = user


