"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate({ models }) {}
  }
  Image.init(
    {
      name: DataTypes.STRING(100),
      product_id: DataTypes.BIGINT.UNSIGNED,
      extension: DataTypes.STRING(10),
      mime_type: DataTypes.STRING(25),
    },
    {
      sequelize,
      modelName: "image",
    }
  );
  return Image;
};
