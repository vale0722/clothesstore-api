const { deleteFile } = require("../../../helpers");
const { productsDisk } = require("../../../config/bucket");
const { ImageQuery } = require("../../../data-access");

module.exports = async function (images) {
  for (const image of images) {
    try {
      deleteFile(productsDisk + image.name);
      await ImageQuery.destroy(image.id);
      return {
        status: 200,
      };
    } catch (exception) {
      console.log(exception);
      return {
        status: 400,
        error: exception,
      };
    }
  }
};
