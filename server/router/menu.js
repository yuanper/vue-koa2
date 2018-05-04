/**
 * 菜单路由
 * 
 */
const router = require('koa-router')()
const menuController = require('./../controller/menu')

const routers = router
    .get('/getmenulist', menuController.getMenuList)
    .post('/addnewmenu', menuController.addNewMenu)
    .post('/delmenuinfo', menuController.deleteMenuInfo)
    .post('/updatemenuinfo', menuController.updateMenuInfo)

module.exports = routers