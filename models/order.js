"use strict";
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      name: DataTypes.STRING,
      customerId: DataTypes.INTEGER,
    },
    {}
  );
  order.associate = function (models) {
    order.belongsTo(models.customer);
  };
  return order;
};
