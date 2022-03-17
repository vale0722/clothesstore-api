const path = require("path");

module.exports = function (value, request) {
  const fieldname = request.path;
  const file = request.req.files.filter((file) => {
    return file.fieldname === fieldname;
  });
  if (value) {
    const extension = path.extname(file[0].fieldname).toLowerCase();
    return [".jpg", ".jpeg", ".png"].includes(extension);
  }

  return true;
};
