"use strict";
const { Countries } = require("../../constants");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED,
      },
      category_id: {
        allowNull: false,
        type: Sequelize.BIGINT.UNSIGNED,
        references: {
          model: "categories",
          key: "id",
        },
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(70),
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      price: {
        allowNull: false,
        type: Sequelize.DOUBLE,
      },
      discount: {
        type: Sequelize.DOUBLE,
      },
      country: {
        allowNull: false,
        type: Sequelize.ENUM(Countries),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
