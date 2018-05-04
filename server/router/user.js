/**
 * 用户路由
 * 
 */
const router = require('koa-router')()
const userController = require('./../controller/user')

const routers = router
    .get('/sign',userController.sign)
    .get('/login',userController.login)
    .get('/getAllUserInfo',userController.getAllUserInfo)
    .get('/updateUserInfo',userController.updateUserInfo)
    .post('/deleteUserInfo',userController.deleteUserInfo)

module.exports = routers