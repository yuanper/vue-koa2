/**
 * 用户路由
 * 
 */
const router = require('koa-router')()
const userController = require('./../controller/user')

const routers = router
    .get('/sign',userController.sign)
    .get('/login',userController.login)

module.exports = routers