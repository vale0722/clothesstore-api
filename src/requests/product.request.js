const { body } = require("express-validator");
const { ProductQuery, CategoryQuery } = require("../data-access");
const { isImage } = require("./rules");
const multer = require("multer");
const upload = multer({ dest: "/tmp/uploads" });

module.exports = {
  store: [
    upload.any(),
    body("name")
      .isString()
      .notEmpty()
      .isLength({ max: 70 })
      .custom((value, { req }) => {
        return ProductQuery.findByName(value).then((product) => {
          if (
            (req.id && product && product.id !== req.id) ||
            (!req.id && product)
          ) {
            return Promise.reject("El nombre ya está en uso");
          }
        });
      }),
    body("description").isString().notEmpty().isLength({ max: 255 }),
    body("category_id")
      .isNumeric()
      .notEmpty()
      .custom((value) => {
        return CategoryQuery.show(value).then((category) => {
          if (!category) {
            return Promise.reject("La categoria no existe");
          }
        });
      }),
    body("price").isNumeric().notEmpty(),
    body("discount").isNumeric().notEmpty(),
    body("image_front").custom(isImage),
    body("image_back").custom(isImage),
  ],
};
