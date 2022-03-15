const {
  indexCategory,
  storeCategory,
  updateCategory,
} = require("../use-cases/categories");
const { validationResult } = require("express-validator");

module.exports = {
  async index(req, res) {
    const response = {};
    try {
      const categories = await indexCategory(req);
      response.status = 200;
      response.body = { categories };
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
        const category = await storeCategory(req);
        response.status = 201;
        response.body = { category };
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

  async update(req, res) {
    const response = {};
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      try {
        const category = await updateCategory(req);
        response.status = 201;
        response.body = { category };
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
};
