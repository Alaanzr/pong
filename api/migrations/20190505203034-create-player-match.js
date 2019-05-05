module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('player_match', {
      player_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'player',
          key: 'player_id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      match_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'match',
          key: 'match_id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      score: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    })
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('player_match');
  }
}