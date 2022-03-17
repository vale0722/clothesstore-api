const bucketConfig = require("../config/bucket");
const s3 = require("../infrastructure/storage/bucket");

module.exports = (name) => {
  const params = {
    Bucket: bucketConfig.bucketName,
    Key: name,
  };

  s3.deleteObject(params, function (err, data) {
    if (err) {
      throw err;
    }
    return data;
  });
};
