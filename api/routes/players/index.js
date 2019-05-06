const koaRouter = require('koa-joi-router')
const router = koaRouter()
const Joi = koaRouter.Joi
const { findOne, findAll } = require('../../domain/players')

const routes = [
  {
    method: 'get',
    path: '/players',
    handler: async ctx => {
      const players = await findAll()
      ctx.ok(players)
    }
  },
  {
    method: 'get',
    path: '/players/:id',
    validate: {
      params: {
        id: Joi.number().required()
      }
    },
    handler: async ctx => {
      const { id } = ctx.request.params
      const player = await findOne(id)
      ctx.ok(player)
    }
  }
]

router.route(routes)

module.exports = router
