const {
  product,
  product_view,
  category,
  image,
} = require("../models/persistence");
const Sequelize = require("sequelize");
const { Op } = require("sequelize");

const create = async function (data) {
  try {
    return await product_view.create({
      product_id: data.product_id,
      browser: data.browser,
      ip: data.ip,
    });
  } catch (e) {
    console.log("Error: ", e);
  }
};

async function index() {
  try {
    const today = new Date();
    return await product.findAll({
      subQuery: false,
      include: [
        {
          model: product_view,
          as: "product_views",
          attributes: [],
        },
        {
          model: category,
          as: "category",
        },
        {
          model: image,
          as: "images",
          separate: true,
        },
      ],
      where: {
        created_at: {
          [Op.between]: [
            new Date(
              today.getFullYear(),
              today.getMonth(),
              today.getDate() - 7
            ),
            today,
          ],
        },
      },
      attributes: {
        include: [
          [
            Sequelize.fn("COUNT", Sequelize.col("product_views.id")),
            "count_search",
          ],
        ],
      },
      group: ["product.id", "product_views.ip"],
      order: Sequelize.literal("count_search DESC"),
      limit: 10,
    });
  } catch (e) {
    console.log("Error: ", e);
  }
}

module.exports = {
  create,
  index,
};
