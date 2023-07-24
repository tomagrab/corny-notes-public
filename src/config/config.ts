import dotenv from "dotenv";
import path from "path";
import os from "os";
import fs from "fs";

dotenv.config();

const userDataPath = path.join(
  os.homedir(),
  "C:/Users/Tommy/AppData/Roaming/cornell-notes"
); // replace .myApp with your app name
if (!fs.existsSync(userDataPath)) {
  fs.mkdirSync(userDataPath);
}

let storagePath = path.join(userDataPath, "db.sqlite");

module.exports = {
  development: {
    dialect: "sqlite",
    storage: storagePath,
  },
  test: {
    dialect: "sqlite",
    storage: storagePath,
  },
  production: {
    dialect: "sqlite",
    storage: storagePath,
  },
};
