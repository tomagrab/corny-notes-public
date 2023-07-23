import dotenv from "dotenv";
import path from "path";

dotenv.config();

module.exports = {
  development: {
    dialect: "sqlite",
    storage: path.join(__dirname, "../database/db.sqlite"),
  },
  test: {
    dialect: "sqlite",
    storage: path.join(__dirname, "../database/db.sqlite"),
  },
  production: {
    dialect: "sqlite",
    storage: path.join(__dirname, "../database/db.sqlite"),
  },
};
