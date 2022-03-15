"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ models }) {
      Product.belongsTo(models.category, {
        foreignKey: "category_id",
        as: "category",
      });

      Product.hasMany(models.image, {
        foreignKey: "product_id",
        as: "images",
      });
    }
  }
  Product.init(
    {
      category_id: DataTypes.BIGINT.UNSIGNED,
      name: DataTypes.STRING(70),
      description: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      discount: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return Product;
};
