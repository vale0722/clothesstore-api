const { ProductQuery } = require("../../data-access");
const { ProductDto } = require("../../models/dto");

module.exports = async function (product) {
  const res = await ProductQuery.show(product);
  return ProductDto.toDTO(res);
};
