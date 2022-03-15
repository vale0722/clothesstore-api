const mime = require("mime");
const { ImageQuery } = require("../../../data-access");
const { ImageDto } = require("../../../models/dto");
const Uuid = require("uuid");
const { uploadFile, scalingImage } = require("../../../helpers");
const { productsDisk } = require("../../../config/bucket");

module.exports = async function (request) {
  const images = {};
  if (request.files) {
    for (let file of request.files) {
      try {
        if (file.size > 1000) {
          file = scalingImage(file);
        }

        const imageName = Uuid.v4() + "-" + file.filename;

        uploadFile(file, productsDisk + imageName);

        const image = await ImageQuery.create({
          name: imageName,
          product_id: request.id,
          extension: mime.getExtension(imageName),
          mime_type: mime.getType(imageName),
        });
        images.push(ImageDto.toDTO(image));
      } catch (e) {
        console.log(e);
      }
    }
  }

  return images;
};
