"use strict";
const { Model } = require("sequelize");
const { Countries } = require("../../constants");
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

      Product.hasMany(models.product_view, {
        foreignKey: "product_id",
        as: "product_views",
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
      country: DataTypes.ENUM(Countries),
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return Product;
};
