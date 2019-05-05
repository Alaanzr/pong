'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('match', {
      match_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      player_one: {
        type: Sequelize.INTEGER,
        references: {
          model: 'player',
          key: 'player_id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      player_two: {
        type: Sequelize.INTEGER,
        references: {
          model: 'player',
          key: 'player_id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      player_one_score: {
        type: Sequelize.INTEGER
      },
      player_two_score: {
        type: Sequelize.INTEGER
      },
      match_group_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'match_group',
          key: 'match_group_id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('match');
  }
};