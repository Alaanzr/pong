const { matchGroup, match } = require('../models')

const findOne = async (id, filters = {}) => {
  const queryOptions = {
    where: { match_group_id: id }
  }

  if (filters.withAssociations) {
    queryOptions.include = [ match ]
  }

  return matchGroup.findOne(queryOptions)
}

const findAll = async filters => {
  const queryOptions = {}

  if (filters.withAssociations) {
    queryOptions.include = [ match ]
  }

  return matchGroup.findAll(queryOptions)
}

module.exports = {
  findOne,
  findAll
}
