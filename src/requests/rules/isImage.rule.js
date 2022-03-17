const path = require("path");

module.exports = function (value, request) {
  if (request.req.files) {
    const fieldname = request.path;
    const file = request.req.files.filter((file) => {
      return file.fieldname === fieldname;
    });
    const extension = path.extname(file[0].fieldname).toLowerCase();
    return [".jpg", ".jpeg", ".png"].includes(extension);
  }

  return true;
};
