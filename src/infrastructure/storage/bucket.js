const AWS = require("aws-sdk");
const bucketConfig = require("../../config/bucket");

const s3 = new AWS.S3({
  accessKeyId: bucketConfig.user,
  secretAccessKey: bucketConfig.secret,
});
const params = {
  Bucket: bucketConfig.bucketName,
};

s3.createBucket(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else console.log("Bucket Creado exitosamente", data.Location);
});

module.exports = s3;
