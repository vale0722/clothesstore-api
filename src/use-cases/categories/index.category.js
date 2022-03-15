const { CategoryQuery } = require("../../data-access");
const { CategoryDto } = require("../../models/dto");

module.exports = async function (request) {
  const res = await CategoryQuery.index(request);

  if (res.length > 0) {
    return res.map((category) => {
      return CategoryDto.toDTO(category);
    });
  }

  return {};
};
