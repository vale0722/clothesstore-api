const { deleteFile } = require("../../../helpers");
const { productsDisk } = require("../../../config/bucket");
const { ImageQuery } = require("../../../data-access");

module.exports = async function (images) {
  images.forEach((image) => {
    try {
      deleteFile(productsDisk + image.name);
      ImageQuery.destroy(image.id);
      return {
        status: 200,
      };
    } catch (exception) {
      return {
        status: 400,
        error: exception,
      };
    }
  });
};
