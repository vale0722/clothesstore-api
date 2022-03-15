"use strict";

const { ProductDto } = require("./index");

module.exports = class ProductViewDto {
  constructor(data) {
    this.id = data.id;
    this.product = data.product;
    this.browser = data.browser;
    this.ip = data.ip;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  static toDTO(productView) {
    return new ProductDto(
      productView
        ? {
            id: productView.id,
            browser: productView.browser,
            ip: productView.ip,
            product: ProductDto.toDTO(productView.product),
            createdAt: productView.created_at,
            updatedAt: productView.updated_at,
          }
        : {
            id: "",
            browser: "",
            ip: "",
            product: {},
            createdAt: "",
            updatedAt: "",
          }
    );
  }
};
