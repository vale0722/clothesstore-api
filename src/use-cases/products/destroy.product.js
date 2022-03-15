const { ProductQuery } = require("../../data-access");
const { destroyImage } = require("./images");

module.exports = async function (product) {
  try {
    const images = ProductQuery.show(product).images;
    await ProductQuery.destroy(product);
    await destroyImage(images);

    return { status: 200 };
  } catch (e) {
    return { status: 402, message: e.message };
  }
};
