const { ProductQuery } = require("../../data-access");
const { ProductDto } = require("../../models/dto");

module.exports = async function (request) {
  const res = await ProductQuery.index(request);
  if (res.length > 0) {
    return res.map((product) => {
      return ProductDto.toDTO(product);
    });
  }

  return {};
};
