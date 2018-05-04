/**
 * 数据库操作，用户组
 */

const db = require('./../util/async-db')

const group = {
    /**
     * 新增用户组
     * @param {object} name,describle,status
     * @returns {object}
     */
    async addGroup(params){
        let name = params.name || '';
        let describle = params.describle || '';
        let status = parseInt(params.status) || 0;
        let result = await db.insertData('user_type',{
            name: name,
            describle: describle,
            status: status
        });
        return result
    },

    /**
     * 查找用户组是否已经存在
     * @param {object} name
     * @returns {object|null} 查找返回的结果
     */
    async groupIsExist(params){
        let sql = `select * from user_type where name="${params.name}" limit 1`;
        let result = await db.query(sql);
        if(Array.isArray(result) && result.length >0){
            return result[0]
        }else{
            return null
        }
    },

    /**
     * 获取用户组列表
     * @param null
     * @returns {object|null} 返回用户组列表
     */
    async getGroupList(){
        let sql = `select * from user_type`;
        let result = await db.query(sql);
        if(Array.isArray(result) && result.length> 0){
            return result;
        }else{
            return null
        }
    },

    /**
     * 修改用户组信息
     * @param {object}
     * @returns {object|null} 返回结果
     */
    async updateGroupInfo(params){
        let name = params.name || '';
        let describle = params.describle || '';
        let status = params.status || 0;
        let id = params.id;
        let result = await db.updateData(
            'user_type',
            {
                name: name,
                describle: describle,
                status: status
            },
            id
        );
        return result
    },
    /**
     * 删除用户组信息
     * @param {object} id
     * @return 删除结果
     */
    async deleteGroupInfo(params){
        let result = await db.deleteDataById('user_type',params.id);
        return result;
    }
}

module.exports = group