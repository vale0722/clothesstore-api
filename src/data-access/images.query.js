const { images } = require("../models/persistence");

const destroy = async function ({ id }) {
  try {
    return await images.destroy({
      where: { id },
    });
  } catch (e) {
    console.log("Error: ", e);
  }
};

const create = async function ({ data }) {
  try {
    return await images.create(data);
  } catch (e) {
    console.log("Error: ", e);
  }
};

module.exports = {
  create,
  destroy,
};
