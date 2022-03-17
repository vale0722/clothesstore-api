const { ProductViewQuery } = require("../../data-access");

module.exports = async function (request) {
  await ProductViewQuery.create({
    product_id: request.params.id,
    browser: request.headers["user-agent"],
    ip: request.ip,
  });

  return {
    status: 200,
  };
};
