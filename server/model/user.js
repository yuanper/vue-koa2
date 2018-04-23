/**
 * 数据库层操作
 */
const db = require('./../util/async-db')

const user = {
    /**
    *注册用户
    *@param {object} model 用户数据模型
    *@return {object} mysql执行的结果
     */
    async createUser(model){
        let result = await db.insertData('user',model)
        return result
    },

    /**
     * 查找一个用户是否已经存在
     * @param {object} params 查找条件的参数
     * @return {object|null} 查找结果
     */
    async userIsExist(params){
        let sql = `select * from user where user_name="${params.userName}" limit 1`
        let result = await db.query(sql)
        if(Array.isArray(result) && result.length > 0){
            result = result[0]
        }else{
            result = null
        }
        return result
    },

    /**
     * 根据用户名和密码查找用户
     * @param {object} params 用户名和密码
     * @return {object|null} 返回查找的结果
     */
    async getUserByNameAndPassword(params){
        let sql = `select * from user where password="${params.password}" and user_name = "${params.userName}" limit 1`
        let result = await db.query(sql)
        if (Array.isArray(result) && result.length > 0) {
            result = result[0]
        } else {
            result = null
        }
        return result
    },

    /**
     * 根据用户名查找用户信息
     * @param {string} userName 用户账号名称
     * @returns {object|null} 查找结果
     */
    async getUserInfoByUserName(userName){
        let result = await db.select(
            'user',
            ['id','email','user_name','create_time','modified_time']
        )
        if(Array.isArray(result) && result.length > 0){
            result = result[0]
        }else{
            result = null
        }
        return result
    }
}

module.exports = user