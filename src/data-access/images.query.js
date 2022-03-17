const { image } = require("../models/persistence");

const destroy = async function (id) {
  try {
    return await image.destroy({
      where: { id },
    });
  } catch (e) {
    console.log("Error: ", e);
  }
};

const create = async function (data) {
  try {
    return await image.create({
      name: data.name,
      product_id: data.product_id,
      extension: data.extension,
      mime_type: data.mime_type,
    });
  } catch (e) {
    console.log("Error: ", e);
  }
};

module.exports = {
  create,
  destroy,
};
