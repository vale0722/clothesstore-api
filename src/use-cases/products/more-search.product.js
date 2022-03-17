const { ProductViewQuery } = require("../../data-access");
const { ProductDto } = require("../../models/dto");

module.exports = async function (request) {
  const res = await ProductViewQuery.index(request);
  if (res.length > 0) {
    return await res.map((product) => {
      return ProductDto.toDTO(product);
    });
  }

  return {};
};
