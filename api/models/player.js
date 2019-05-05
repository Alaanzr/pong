module.exports = (sequelize, DataTypes) => {
  const player = sequelize.define('player', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    underscored: true
  })

  player.associate = function (models) {
    player.belongsToMany(models.match, { through: 'player_match' })
  }

  return player
}
