'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pictures = sequelize.define('Pictures', {
    id: { 
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4 
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    picture: DataTypes.ARRAY(DataTypes.STRING)
  }, {});
  Pictures.associate = function(models) {
    Pictures.belongsTo(models.Users, {foreignKey: "userId"});
  };
  return Pictures;
};