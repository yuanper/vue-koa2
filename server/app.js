const Koa = require('koa2')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const routers = require('./router/index')
app.use(bodyParser())

app.on('error',function (err,ctx) {
    console.log('server error',err)
})

app.use(routers.routes()).use(routers.allowedMethods())

app.listen(3000,()=>{
    console.log('server is start at port 3000')
})