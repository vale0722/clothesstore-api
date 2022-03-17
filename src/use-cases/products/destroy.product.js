const { ProductQuery } = require("../../data-access");
const { destroyImage } = require("./images");

module.exports = async function (request, product) {
  try {
    const images = (await ProductQuery.show(product)).images;
    await destroyImage(images);
    await ProductQuery.destroy(product);

    return { status: 200 };
  } catch (e) {
    return { status: 402, message: e.message };
  }
};
