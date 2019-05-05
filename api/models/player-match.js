module.exports = (sequelize, DataTypes) => {
  const playerMatch = sequelize.define('player_match', {
    player_id: DataTypes.INTEGER,
    match_id: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {
    underscored: true
  })

  playerMatch.associate = function (models) {

  }

  return playerMatch
}
