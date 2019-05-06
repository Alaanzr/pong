const { match_group, match } = require('../models')

const findOne = async (id, filters = {}) => {
  const queryOptions = {
    where: { match_group_id: id }
  }

  if (filters.withAssociations) {
    queryOptions.include = [ match ]
  }

  const matchGroup = await match_group.findOne(queryOptions)

  return matchGroup
}

const findAll = async filters => {
  const queryOptions = {}

  if (filters.withAssociations) {
    queryOptions.include = [ match ]
  }

  return match_group.findAll(queryOptions)
}

module.exports = {
  findOne,
  findAll
}
