"use strict";
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "product",
    {
      name: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {}
  );
  product.associate = function (models) {
    product.belongsTo(models.category);
  };
  return product;
};
