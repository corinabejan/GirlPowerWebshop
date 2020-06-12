"use strict";
module.exports = (sequelize, DataTypes) => 
  const orderedproduct = sequelize.define('orderedproduct', {
    name: DataTypes.STRING
  }, {});
  orderedproduct.associate = function(models) {

    orderedproduct.belongsTo(models.product);
    orderedproduct.belongsTo(models.order);
  };
  return orderedproduct;
};
