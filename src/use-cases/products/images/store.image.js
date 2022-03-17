const mime = require("mime");
const { ImageQuery } = require("../../../data-access");
const { ImageDto } = require("../../../models/dto");
const Uuid = require("uuid");
const { uploadFile, scalingImage } = require("../../../helpers");
const { productsDisk } = require("../../../config/bucket");
const fs = require("fs");
const path = require("path");

module.exports = async function (request) {
  const images = [];
  if (request.files) {
    for (let file of request.files) {
      try {
        const imageName = Uuid.v4() + "-" + file.filename;
        const extension = mime.getExtension(file.mimetype);
        const mimetype = file.mimetype;
        if (file.size > 1000) {
          const name = file.path + "_new";
          await scalingImage(file, name);
          file = fs.readFileSync(name);
        }

        uploadFile(file, productsDisk + imageName);
        const image = await ImageQuery.create({
          name: imageName,
          product_id: request.id,
          extension: extension,
          mime_type: mimetype,
        });
        images.push(ImageDto.toDTO(image));
      } catch (e) {
        console.log(e);
      }
    }
  }

  return images;
};
