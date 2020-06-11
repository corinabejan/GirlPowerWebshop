'use strict';
module.exports = (sequelize, DataTypes) => {
  const orderedproduct = sequelize.define('orderedproduct', {
    name: DataTypes.STRING
  }, {});
  orderedproduct.associate = function(models) {
    orderedproducts.belongsTo(models.product);
    orderedproducts.belongsTo(models.order);
  };
  return orderedproduct;
};