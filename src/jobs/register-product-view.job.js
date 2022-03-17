const Job = require("./job");
const { storeProductView } = require("../use-cases/products");

class RegisterProductViewJob extends Job {
  execute(req) {
    storeProductView(req)
      .then((r) => console.log("register product searched"))
      .catch(console.log);
  }
}

module.exports = RegisterProductViewJob;
