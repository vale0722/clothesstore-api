"use strict";
module.exports = class CategoryDto {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.products = data.products;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  static toDTO(category) {
    return new CategoryDto(
      category
        ? {
            id: category.id,
            name: category.name,
            description: category.description,
            products: category.products,
            createdAt: category.created_at,
            updatedAt: category.updated_at,
          }
        : {
            id: "",
            name: "",
            description: "",
            products: {},
            createdAt: "",
            updatedAt: "",
          }
    );
  }
};
