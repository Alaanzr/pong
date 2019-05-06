module.exports = (sequelize, DataTypes) => {
  const matchGroup = sequelize.define('match_group', {
    match_group_id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    winner: DataTypes.INTEGER
  }, {
    underscored: true
  })

  matchGroup.associate = function (models) {
    this.hasMany(models.match, { foreignKey: 'match_group_id' })
  }

  return matchGroup
}
