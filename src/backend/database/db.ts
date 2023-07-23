import { Sequelize } from "sequelize";
import { logger } from "../../logger";
import path from "path";

export const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "../database/db.sqlite"),
});

db.authenticate()
  .then(() => {
    logger.info("Connection has been established successfully.");
    return db.sync({ force: true });
  })
  .then(() => {
    logger.info("All models were synchronized successfully.");
  })
  .catch((err) => {
    logger.error("Unable to connect to the database:", err);
  });
