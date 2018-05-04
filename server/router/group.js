const router = require('koa-router')()

const groupController = require('./../controller/group')

const routers = router
    .post('/addGroup',groupController.addGroup)
    .post('/updateGroupInfo',groupController.updateGroupInfo)
    .post('/deleteGroupInfo',groupController.deleteGroupInfo)
    .get('/getGroupList',groupController.getGroupList)

module.exports = routers