/**
 * 数据库层操作
 */
const db = require('./../util/async-db')

const user = {
    /**
    *注册用户
    *@param {object} params 用户数据模型
    *@return {object} mysql执行的结果
     */
    async createUser(params){
        let userName = params.userName || '';
        let email = params.email || '';
        let password = params.password || '';
        let userType = params.userType || '';
        let nickname = params.nickname || '';
        let status = params.status || 0;
        let result = await db.insertData(
            'user', 
            {
                user_name:userName,
                email: email,
                password: password,
                user_type: userType,
                create_time: new Date(),
                nickname: nickname,
                status: status
            }
        )
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
    },

    /**
     * 获取所有的用户信息
     * @param {string} search_key 查询关键字
     * @return {object|null} 查找结果
     */
    async getAllUserInfo(params){
        let search_key = params.searchKey || '';
        let sql = `select id,user_name,nickname,user_type,email,DATE_FORMAT(create_time,'%Y-%m-%d %H:%i:%S') create_time,status from user where concat(user_name,user_type,nickname) like '%${search_key}%'`;
        let result = await db.query(sql);
        if(Array.isArray(result) && result.length >0){
            return result
        }else{
            return null
        }
    },
    /**
     * 修改用户的信息
     * @param {object} params修改的信息
     * @return {object|null} 修改的结果
     */
    async updateUserInfo(params){
        let id = params.id;
        let user_name = params.userName;
        let email = params.email;
        let user_type = params.userType;
        let status = params.status;
        let password = params.password;
        let sql = `UPDATE user SET user_name='${user_name}',email='${email}',user_type='${user_type}',status='${status}',password='${password}' where id='${id}' `;
        let result = await db.query(sql);
        return result
    },

    /**
     * 删除用户的信息
     * @param {object} id
     * @return {object}
     */
    async deleteUserInfo(params){
        let id = parseInt(params.id);
        let result = await db.deleteDataById(
            'user',
            id
        )
        return result
    }
}

module.exports = user