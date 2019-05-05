'use strict';
module.exports = (sequelize, DataTypes) => {
  const MatchGroup = sequelize.define('MatchGroup', {
    matchId: DataTypes.INTEGER,
    winner: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  MatchGroup.associate = function(models) {
    // associations can be defined here
  };
  return MatchGroup;
};