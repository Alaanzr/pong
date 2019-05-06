const { player } = require('../models')

const findOne = async id => {
  return player.findByPk(id)
}

const findAll = async () => {
  return player.findAll()
}

module.exports = {
  findOne,
  findAll
}
