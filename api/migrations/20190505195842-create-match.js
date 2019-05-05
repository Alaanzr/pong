module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('match', {
      match_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      match_group_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'match_group',
          key: 'match_group_id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
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
    return queryInterface.dropTable('match')
  }
}