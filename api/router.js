const koaRouter = require('koa-joi-router')
const routes = require('./routes')

const router = koaRouter()

router.prefix('/api')

routes.forEach(route => router.use(route))

module.exports = router.middleware()
