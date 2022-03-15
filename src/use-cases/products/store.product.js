const { ProductQuery } = require("../../data-access");
const { ProductDto } = require("../../models/dto");
const { storeImage } = require("./images");

module.exports = async function (request) {
  const res = await ProductQuery.create({
    category_id: request.body.category_id,
    name: request.body.name,
    description: request.body.description,
    price: request.body.price,
    discount: request.body.discount,
  });
  request.id = res.id;
  await storeImage(request);
  return ProductDto.toDTO(res);
};
