const {
  indexProduct,
  storeProduct,
  showProduct,
  destroyProduct,
} = require("../use-cases/products");
const { validationResult } = require("express-validator");

module.exports = {
  async index(req, res) {
    const response = {};

    try {
      const products = await indexProduct(req);
      response.status = 200;
      response.body = { products };
    } catch (e) {
      console.log(e);
      response.status = 400;
      response.body = {
        error: e.message,
      };
    }

    res.status(response.status).json(response.body);
  },

  async show(req, res) {
    const response = {};

    try {
      const product = await showProduct(req.id);
      if (product.id) {
        response.status = 200;
        response.body = {
          product: product,
        };
      } else {
        response.status = 404;
        response.body = {
          product: product,
        };
      }
    } catch (e) {
      response.status = 400;
      response.body = {
        error: e.message,
      };
    }

    res.status(response.status).json(response.body);
  },

  async store(req, res) {
    const response = {};
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      try {
        const product = await storeProduct(req);
        response.status = 201;
        response.body = {
          product,
          message: "Producto creado exítosamente",
        };
      } catch (e) {
        response.status = 400;
        response.body = {
          error: e.message,
        };
      }
    } else {
      response.status = 402;
      response.body = { error: errors };
    }

    res.status(response.status).json(response.body);
  },

  async destroy(req, res) {
    const response = {};

    try {
      await destroyProduct(req, req.id);
      response.status = 200;
      response.body = {
        message: "Producto eliminado exítosamente",
      };
    } catch (e) {
      response.status = 400;
      response.body = {
        error: e.message,
      };
    }

    res.status(response.status).json(response.body);
  },
};
