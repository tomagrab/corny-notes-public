import { app, BrowserWindow } from "electron";
import path from "path";
import "./backend/Controllers/notesController";

try {
  require("electron-reloader")(module, {
    debug: true,
    watchRenderer: true,
    ignore: [path.resolve(__dirname, "node_modules")],
    electron: require(`${__dirname}/node_modules/electron`),
    hardResetMethod: "exit",
    logLevel: "info",
  });
} catch (_) {}

let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  mainWindow.loadFile(path.join(__dirname, "../frontend/index.html"));

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (mainWindow === null) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
