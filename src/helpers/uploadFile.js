const fs = require("fs");
const bucketConfig = require("../config/bucket");
const s3 = require("../infrastructure/storage/bucket");

module.exports = (file, name) => {
  const fileContent = fs.readFileSync(file);
  const params = {
    Bucket: bucketConfig.bucketName,
    Key: name,
    Body: fileContent,
  };

  s3.upload(params, function (err, data) {
    if (err) {
      throw err;
    }
    return data;
  });
};
