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
    }
}

module.exports = user


