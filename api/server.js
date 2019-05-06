const Koa = require('koa')
const cors = require('@koa/cors')
const compress = require('koa-compress')
const respond = require('koa-respond')
const { errorHandler, notFoundHandler } = require('./middleware')
const router = require('./router')

const app = new Koa()
const port = process.env.PORT || 8080

app
  .use(errorHandler)
  .use(compress())
  .use(respond())
  .use(cors())
  .use(router)
  .use(notFoundHandler)
  .listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })

