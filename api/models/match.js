module.exports = (sequelize, DataTypes) => {
  const match = sequelize.define('match', {
    match_group_id: DataTypes.INTEGER,
    winner: DataTypes.INTEGER
  }, {
    underscored: true
  })

  match.associate = function (models) {
    match.belongsToMany(models.player, { through: 'player_match' })
  }

  return match
}
