const { body } = require("express-validator");
const { CategoryQuery } = require("../data-access");
const { integer } = require("sharp/lib/is");

module.exports = {
  store: [
    body("name")
      .isString()
      .notEmpty()
      .isLength({ max: 70 })
      .custom((value, { req }) => {
        return CategoryQuery.findByName(value).then((category) => {
          if (
            (req.params.id &&
              category &&
              parseInt(category.id) !== parseInt(req.params.id)) ||
            (!req.params.id && category)
          ) {
            return Promise.reject("El nombre ya está en uso");
          }
        });
      }),
    body("description").isString().notEmpty().isLength({ max: 255 }),
  ],
};
