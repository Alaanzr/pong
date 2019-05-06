module.exports = (sequelize, DataTypes) => {
  const ranking = sequelize.define('ranking', {
    playerId: {
      field: 'player_id',
      type: DataTypes.INTEGER
    },
    rank: DataTypes.INTEGER
  })

  ranking.associate = function (models) {

  }

  return ranking
}
