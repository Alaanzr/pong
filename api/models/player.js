module.exports = (sequelize, DataTypes) => {
  const player = sequelize.define('player', {
    playerId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: 'player_id'
    },
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
