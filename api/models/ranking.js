module.exports = (sequelize, DataTypes) => {
  const ranking = sequelize.define('ranking', {
    player_id: DataTypes.INTEGER,
    rank: DataTypes.INTEGER
  }, {
    underscored: true
  })

  ranking.associate = function (models) {

  }

  return ranking
}
