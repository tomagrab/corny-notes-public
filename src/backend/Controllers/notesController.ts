import { ipcMain } from "electron";
import { NotesDAO } from "../DAO/notesDAO";
import { logger } from "../../logger";

const notesDAO = new NotesDAO();

ipcMain.handle("getAllNotes", async (event, args) => {
  try {
    return await notesDAO.getAllNotes();
  } catch (error) {
    logger.error(error);
    return { error: "An unknown error occurred." };
  }
});

ipcMain.handle("getNoteById", async (event, args) => {
  try {
    return await notesDAO.getNoteById(args);
  } catch (error) {
    logger.error(error);
    return { error: "An unknown error occurred." };
  }
});

ipcMain.handle("createNote", async (event, args) => {
  if (
    !args.title ||
    !args.author ||
    !args.cues ||
    !args.notes ||
    !args.summary
  ) {
    logger.error("Missing required fields");
    event.sender.send("error", "Missing required fields");
    return;
  }
  try {
    return await notesDAO.createNote(
      args.title,
      args.author,
      args.cues,
      args.notes,
      args.summary
    );
  } catch (error) {
    logger.error(error);
    return { error: "An unknown error occurred." };
  }
});

ipcMain.handle("updateNote", async (event, args) => {
  try {
    return await notesDAO.updateNote(
      args.id,
      args.title,
      args.author,
      args.cues,
      args.notes,
      args.summary
    );
  } catch (error) {
    logger.error(error);
    return { error: "An unknown error occurred." };
  }
});

ipcMain.handle("deleteNoteById", async (event, args) => {
  try {
    return await notesDAO.deleteNoteById(args);
  } catch (error) {
    logger.error(error);
    return { error: "An unknown error occurred." };
  }
});

export {};
