const discounts = require("./discounts");

module.exports = function (value, { req }) {
  const country = req.body.country;

  Object.values(discounts).forEach((discount) => {
    if (discount.check(country)) {
      return discount.validate(value);
    }
  });

  return true;
};
