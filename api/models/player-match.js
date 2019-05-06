module.exports = (sequelize, DataTypes) => {
  const playerMatch = sequelize.define('playerMatch', {
    playerId: {
      field: 'player_id',
      type: DataTypes.INTEGER,
      references: { key: 'player_id', model: sequelize.models.player }
    },
    matchId: {
      field: 'match_id',
      type: DataTypes.INTEGER,
      references: { key: 'match_id', model: sequelize.models.match }
    },
    score: DataTypes.INTEGER
  }, {
    tableName: 'player_match'
  })

  playerMatch.associate = function (models) {

  }

  return playerMatch
}
