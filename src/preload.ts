import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  invoke: (channel: string, data?: any) => {
    let validChannels = [
      "getAllNotes",
      "getNoteById",
      "createNote",
      "updateNote",
      "deleteNoteById",
    ];
    if (validChannels.includes(channel)) {
      return ipcRenderer.invoke(channel, data);
    }
  },
  on: (channel: string, func: any) => {
    let validChannels = [
      "getAllNotes",
      "getNoteById",
      "createNote",
      "updateNote",
      "deleteNoteById",
    ];
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  },
});

console.log("preload.ts loaded");
console.log("api", window.api);
