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
    order.belongsToMany(models.product, {
      through: "orderProducts",
      foreignKey: "orderId",
    });
  };
  return order;
};
