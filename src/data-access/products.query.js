const { category, product, image } = require("../models/persistence");

const destroy = async function (id) {
  try {
    return await product.destroy({
      where: { id },
    });
  } catch (e) {
    console.log("Error: ", e);
  }
};

const create = async function (data) {
  try {
    return await product.create({
      name: data.name,
      description: data.description,
      category_id: data.category_id,
      price: data.price,
      discount: data.discount,
    });
  } catch (e) {
    console.log("Error: ", e);
  }
};

const index = async function () {
  try {
    return await product.findAll({
      include: [
        { model: category, as: "category" },
        { model: image, as: "images" },
      ],
    });
  } catch (e) {
    console.log("Error: ", e);
  }
};

const show = async function (id) {
  try {
    return await product.findOne({
      where: { id },
      include: [
        { model: category, as: "category" },
        { model: image, as: "images" },
      ],
    });
  } catch (e) {
    console.log("Error: ", e);
  }
};

const findByName = async function (name) {
  try {
    return await product.findOne({
      include: [
        { model: category, as: "category" },
        { model: image, as: "images" },
      ],
      where: {
        name: name,
      },
    });
  } catch (e) {
    console.log("Error: ", e);
  }
};

module.exports = {
  create,
  index,
  show,
  destroy,
  findByName,
};
