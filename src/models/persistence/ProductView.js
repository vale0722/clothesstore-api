"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductView extends Model {
    static associate({ models }) {
      ProductView.belongsTo(models.product, {
        foreignKey: "product_id",
        as: "product",
      });
    }
  }
  ProductView.init(
    {
      product_id: DataTypes.BIGINT.UNSIGNED,
      browser: DataTypes.STRING(70),
      ip: DataTypes.STRING(20),
    },
    {
      sequelize,
      modelName: "product_view",
    }
  );
  return ProductView;
};
