module.exports = (sequelize, DataTypes) => {
  const match = sequelize.define('match', {
    matchId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: 'match_id'
    },
    winner: {
      references: { key: 'player_id', model: sequelize.models.player },
      type: DataTypes.INTEGER
    }
  })

  match.associate = function (models) {
    this.belongsToMany(models.player, { through: 'player_match' })
  }

  return match
}
