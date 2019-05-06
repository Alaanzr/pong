module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ranking', {
      player_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      rank: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true
      }
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('ranking')
  }
}
