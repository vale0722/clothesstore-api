"use strict";
const CategoryDto = require("./category.dto");
const ImageDto = require("./image.dto");

module.exports = class ProductDto {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.price = data.price;
    this.discount = data.discount;
    this.category = data.category;
    this.images = data.images;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  static toDTO(product) {
    return new ProductDto(
      product
        ? {
            id: product.id,
            name: product.name,
            description: product.description,
            category: CategoryDto.toDTO(product.category),
            images: ImageDto.toCollection(product.images),
            price: product.price,
            discount: product.discount,
            createdAt: product.created_at,
            updatedAt: product.updated_at,
          }
        : {
            id: "",
            name: "",
            description: "",
            category: "",
            price: "",
            discount: "",
            createdAt: "",
            updatedAt: "",
          }
    );
  }

  static toCollection(products) {
    return products.map((product) => {
      return ProductDto.toDTO(product);
    });
  }
};
