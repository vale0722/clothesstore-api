const Discount = require("./discount.rule");

module.exports = class MaxFiftyPercent extends Discount {
  static check(value) {
    return ["colombia", "mexico"].includes(value);
  }
  static validate(value) {
    return value <= 0.5;
  }
};
