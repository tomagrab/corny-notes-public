import dotenv from "dotenv";

dotenv.config();

module.exports = {
  development: {
    dialect: "sqlite",
    storage: "../backend/database/db.sqlite",
  },
  test: {
    dialect: "sqlite",
    storage: "../backend/database/db.sqlite",
  },
  production: {
    dialect: "sqlite",
    storage: "../backend/database/db.sqlite",
  },
};
