module.exports = (sequelize, DataTypes) => {
  const player = sequelize.define('player', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    underscored: true,
  })

  player.associate = function(models) {
    // associations can be defined here
  }

  return player
}