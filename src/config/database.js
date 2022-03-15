if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: process.env.DB_CONNECTION || "mysql",
  options: {
    dialect: process.env.DB_CONNECTION || "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    define: {
      underscored: true,
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
};
