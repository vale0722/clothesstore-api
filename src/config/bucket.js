if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  user: process.env.AWS_ID,
  secret: process.env.AWS_SECRET,
  bucketName: process.env.AWS_BUCKET_NAME,
  productsDisk: "./products/",
};
