"use strict";

const { ProductDto } = require("./index");

module.exports = class ProductViewDto {
  static toDTO(productView) {
    const dto = new ProductViewDto();
    if (productView) {
      this.setId(productView.id);
      this.setProduct(ProductDto.toDTO(productView.product));
      this.setBrowser(productView.browser);
      this.setIp(productView.ip);
    }

    return dto;
  }

  set setId(id) {
    this.id = id;
    return this;
  }

  set setProduct(product) {
    this.product = product;
    return this;
  }

  set setBrowser(browser) {
    this.browser = browser;
    return this;
  }

  set setIp(ip) {
    this.ip = ip;
    return this;
  }
};
