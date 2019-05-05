module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('match_group', {
      match_group_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      winner: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('match_group')
  }
}