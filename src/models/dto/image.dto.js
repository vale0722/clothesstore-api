"use strict";
const DTO = require("./dto");

module.exports = class ImageDto extends DTO {
  constructor(data) {
    super();
    this.id = data.id;
    this.name = data.name;
    this.extension = data.extension;
    this.mimeType = data.mimeType;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  static toDTO(image) {
    return new ImageDto(
      image
        ? {
            id: image.id,
            name: image.name,
            extension: image.extension,
            mimeType: image.mime_type,
            createdAt: image.created_at,
            updatedAt: image.updated_at,
          }
        : {
            id: "",
            name: "",
            extension: "",
            mimetype: "",
            createdAt: "",
            updatedAt: "",
          }
    );
  }
};
