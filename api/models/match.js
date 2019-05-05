module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    player_one: DataTypes.INTEGER,
    player_two: DataTypes.INTEGER,
    player_one_score: DataTypes.INTEGER,
    player_two_score: DataTypes.INTEGER,
    match_group_id: DataTypes.INTEGER
  }, {
    underscored: true,
  })

  Match.associate = function(models) {
    // associations can be defined here
  }

  return Match
};