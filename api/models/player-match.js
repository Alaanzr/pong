module.exports = (sequelize, DataTypes) => {
  const playerMatch = sequelize.define('playerMatch', {
    playerId: {
      field: 'player_id',
      type: DataTypes.INTEGER
    },
    matchId: {
      field: 'match_id',
      type: DataTypes.INTEGER
    },
    score: DataTypes.INTEGER
  }, {
    tableName: 'player_match'
  })

  playerMatch.associate = function (models) {

  }

  return playerMatch
}
