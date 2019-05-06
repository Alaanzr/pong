const http = require('http')
const Koa = require('koa')
const cors = require('@koa/cors')
const compress = require('koa-compress')
const respond = require('koa-respond')
const { errorHandler, notFoundHandler } = require('./middleware')
const router = require('./router')

const app = new Koa()
const port = process.env.PORT || 8000

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

const server = http.createServer(app.callback())

server
  .on('close', () => console.log('Server closing'))
  .on('error', error => console.log(`Error: ${error}`))

console.log('Server created')
