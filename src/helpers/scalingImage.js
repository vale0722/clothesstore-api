const sharp = require("sharp");

module.exports = (file) => {
  sharp(file)
    .resize(1000)
    .then(function (newFileInfo) {
      return {
        status: 200,
        file: newFileInfo,
      };
    })
    .catch(function (exception) {
      return {
        status: 400,
        error: exception.message,
      };
    });
};
