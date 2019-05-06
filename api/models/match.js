module.exports = (sequelize, DataTypes) => {
  const match = sequelize.define('match', {
    match_id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    // match_group_id: {
    //   references: { model: sequelize.models.match_group },
    //   type: DataTypes.INTEGER
    // },
    winner: DataTypes.INTEGER
  }, {
    underscored: true
  })

  match.associate = function (models) {
    // this.belongsTo(models.match_group, { foreignKey: 'match_group_id' })
    this.belongsToMany(models.player, { through: 'player_match' })
  }

  return match
}
