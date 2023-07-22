import { IpcRenderer } from "electron";

declare global {
  interface Window {
    api: {
      invoke: (channel: string, data?: any) => Promise<any>;
      on: (channel: string, callback: any) => void;
    };
  }
}
