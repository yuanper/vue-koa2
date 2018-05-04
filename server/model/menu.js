const db = require('./../util/async-db')

const menu = {
    /**
     * 获取菜单列表
     * @param {}
     * @returns {object} 返回的结果
     */
    async getMenuList(params){
        let sql = `select * from menu`;
        let result = await db.query(sql);
        if(Array.isArray(result) && result.length >0){
            return result
        }else{
            return null
        }
    },
    /**
     * 新增菜单
     * @param {object} 
     * @returns {object} 返回菜单ID
     */
    async addNewMenu(params){
        let title = params.title || '';
        let url = params.url || '';
        let icon = params.icon || '';
        let sort = parseInt(params.sort) || 0;
        let status = parseInt(params.status) || 0;
        let result = await db.insertData(
            'menu',
            {
                title: title,
                url: url,
                icon: icon,
                sort: sort,
                create_time: new Date(),
                status: status
            }
        )
        return result
    },
    /**
     * 删除菜单
     * @param {object} id
     * @returns {object|null} 删除结果
     */
    async deleteMenu(params){
        let id = parseInt(params.id) || 0;
        let result = await db.deleteDataById('menu',id);
        return result.affectedRows
    },
    /**
     * 修改菜单信息
     * @param {object} 需要修改的菜单信息
     * @returns {object|null} 返回修改的结果
     */
    async updateMenuInfo(params){
        let condition = {};
        if(params.title){
            condition.title=params.title
        }
        if(params.url){
            condition.url=params.url
        }
        if(params.icon){
            condition.icon=params.icon
        }
        if(params.sort){
            condition.sort=parseInt(params.sort)
        }
        if(params.status){
            condition.status=parseInt(params.status)
        }
        let result = await db.updateData(
            'menu',
            condition,
            params.id
        )
        return result.affectedRows
    }
}

module.exports = menu