module.exports = (sequelize, DataTypes) => {
  const matchGroup = sequelize.define('match_group', {
    matchId: DataTypes.INTEGER,
    winner: DataTypes.INTEGER
  }, {
    underscored: true,
  })

  matchGroup.associate = function(models) {
    // associations can be defined here
  }

  return matchGroup
}