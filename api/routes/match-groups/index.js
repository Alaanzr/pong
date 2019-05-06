const koaRouter = require('koa-joi-router')
const router = koaRouter()
const Joi = koaRouter.Joi
const { findOne, findAll } = require('../../domain/match-groups')

const routes = [
  {
    method: 'get',
    path: '/match-groups',
    validate: {
      query: {
        withAssociations: Joi.bool()
      }
    },
    handler: async ctx => {
      const filters = ctx.request.query
      const matchGroups = await findAll(filters)
      ctx.ok(matchGroups)
    }
  },
  {
    method: 'get',
    path: '/match-groups/:id',
    validate: {
      params: {
        id: Joi.number().required()
      },
      query: {
        withAssociations: Joi.bool()
      }
    },
    handler: async ctx => {
      const { id } = ctx.request.params
      const filters = ctx.request.query
      const matchGroup = await findOne(id, filters)
      ctx.ok(matchGroup)
    }
  }
]

router.route(routes)

module.exports = router
