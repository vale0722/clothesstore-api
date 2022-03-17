const { CategoryQuery } = require("../../data-access");
const { CategoryDto } = require("../../models/dto");

module.exports = async function (request) {
  const model = await CategoryQuery.show(request.params.id);
  const res = await CategoryQuery.update(model, {
    name: request.body.name,
    description: request.body.description,
  });
  return CategoryDto.toDTO(res);
};
