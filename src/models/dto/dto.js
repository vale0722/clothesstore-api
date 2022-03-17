"use strict";
module.exports = class DTO {
  static toDTO(product) {}
  static toCollection(items) {
    return items
      ? items.map((item) => {
          return this.toDTO(item);
        })
      : [];
  }
};
