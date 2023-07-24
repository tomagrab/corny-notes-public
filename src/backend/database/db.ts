import { Sequelize } from "sequelize";
import { logger } from "../../logger";
import path from "path";
import { app } from "electron";

let storagePath;
const userDataPath = app.getPath("userData");
storagePath = path.join(userDataPath, "db.sqlite");

export const db = new Sequelize({
  dialect: "sqlite",
  storage: storagePath,
});

db.authenticate()
  .then(() => {
    logger.info("Connection has been established successfully.");
    return db.sync();
  })
  .then(() => {
    logger.info("All models were synchronized successfully.");
  })
  .catch((err) => {
    logger.error("Unable to connect to the database:", err);
  });
