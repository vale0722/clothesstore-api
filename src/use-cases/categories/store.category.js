const { CategoryQuery } = require("../../data-access");
const { CategoryDto } = require("../../models/dto");

module.exports = async function (request) {
  const res = await CategoryQuery.create({
    name: request.body.name,
    description: request.body.description,
  });
  return CategoryDto.toDTO(res);
};
