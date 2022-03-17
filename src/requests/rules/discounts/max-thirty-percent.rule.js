const Discount = require("./discount.rule");

module.exports = class MaxFiftyPercent extends Discount {
  static check(value) {
    return ["chile", "peru"].includes(value);
  }
  static validate(value) {
    return value <= 0.3;
  }
};
