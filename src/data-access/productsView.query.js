const { Product, ProductView } = require("../models/persistence");

const create = async function ({ data }) {
  try {
    return await ProductView.create(data);
  } catch (e) {
    console.log("Error: ", e);
  }
};

async function index({}) {
  try {
    return await ProductView.findAll({
      include: [{ model: Product }],
      group: "product.id",
    });
  } catch (e) {
    console.log("Error: ", e);
  }
}

module.exports = {
  create,
  index,
};
