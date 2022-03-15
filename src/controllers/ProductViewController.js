const { indexProduct } = require("../use-cases/products");

module.exports = {
  async index(req, res) {
    const response = {};

    try {
      const products = await indexProduct(req);
      response.status = 200;
      response.body = { products };
    } catch (e) {
      response.status = 400;
      response.body = {
        error: e.message,
      };
    }

    res.status(response.status).json(response);
  },
};
