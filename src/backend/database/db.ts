import { Sequelize } from "sequelize";
import { logger } from "../../logger";

export const db = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite",
});

db.authenticate()
  .then(() => {
    logger.info("Connection has been established successfully.");
  })
  .catch((err) => {
    logger.error("Unable to connect to the database:", err);
  });
