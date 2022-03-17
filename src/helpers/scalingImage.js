const sharp = require("sharp");

module.exports = async (file, name) => {
  return await sharp(file.path).resize(100).png().toFile(name);
};
