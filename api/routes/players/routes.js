const koaRouter = require('koa-joi-router')
const router = koaRouter()
const Joi = koaRouter.Joi
const db = require('../../models')

const routes = [
  {
    method: 'get',
    path: '/players',
    handler: async ctx => {
      const players = await db.player.findAll()
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
      const player = await db.player.findByPk(id)
      ctx.ok(player)
    }
  }
]

router.route(routes)

module.exports = router
