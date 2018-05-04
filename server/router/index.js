const router = require('koa-router')()

const user = require('./user')
const group = require('./group')
const menu = require('./menu')

router.use('/user', user.routes(), user.allowedMethods())
router.use('/group', group.routes(), group.allowedMethods())
router.use('/menu', menu.routes(), menu.allowedMethods())

module.exports = router