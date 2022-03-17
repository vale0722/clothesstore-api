const { category, product } = require("../models/persistence");

const create = async function (data) {
  try {
    return await category.create({
      name: data.name,
      description: data.description,
    });
  } catch (e) {
    console.log("Error: ", e);
  }
};

const index = async function () {
  try {
    return await category.findAll({
      include: [{ model: product, as: "products" }],
    });
  } catch (e) {
    console.log("Error: ", e);
  }
};

const update = async function (model, data) {
  try {
    return await model.update({
      name: data.name,
      description: data.description,
    });
  } catch (e) {
    console.log("Error: ", e);
  }
};

const findByName = async function (name) {
  try {
    return await category.findOne({
      where: {
        name: name,
      },
    });
  } catch (e) {
    console.log("Error: ", e);
  }
};

const show = async function (id) {
  try {
    return await category.findByPk(id);
  } catch (e) {
    console.log("Error: ", e);
  }
};

module.exports = {
  create,
  index,
  update,
  findByName,
  show,
};
