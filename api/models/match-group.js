module.exports = (sequelize, DataTypes) => {
  const matchGroup = sequelize.define('matchGroup', {
    matchGroupId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: 'match_group_id'
    },
    winner: {
      references: { key: 'player_id', model: sequelize.models.player },
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'match_group'
  })

  matchGroup.associate = function (models) {
    this.hasMany(models.match, { foreignKey: 'matchGroupId' })
  }

  return matchGroup
}
