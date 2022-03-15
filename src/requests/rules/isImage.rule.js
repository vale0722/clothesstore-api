const path = require("path");

module.exports = function (value, filename) {
  if (value) {
    const extension = path.extname(filename).toLowerCase();
    return [".jpg", ".jpeg", ".png"].includes(extension);
  }

  return true;
};
