module.exports = (sequelize, DataTypes) => {
  const matchGroup = sequelize.define('match_group', {
    winner: DataTypes.INTEGER
  }, {
    underscored: true
  })

  matchGroup.associate = function (models) {
    matchGroup.hasMany(models.match)
  }

  return matchGroup
}
