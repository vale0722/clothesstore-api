"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ models }) {
      Category.hasMany(models.product, {
        foreignKey: "category_id",
        as: "products",
      });
    }
  }
  Category.init(
    {
      name: DataTypes.STRING(70),
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "category",
    }
  );
  return Category;
};
