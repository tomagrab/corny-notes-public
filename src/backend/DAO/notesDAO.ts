import path from "path";
import { app } from "electron";

import { Note } from "../Models/notesModel";

export class NotesDAO {
  public async getAllNotes(): Promise<any> {
    return Note.findAll();
  }

  public async getNoteById(id: number): Promise<any | null> {
    return Note.findByPk(id);
  }

  public async createNote(
    title: string,
    author: string,
    cues: string,
    notes: string,
    summary: string
  ): Promise<any> {
    return Note.create({ title, author, cues, notes, summary });
  }

  public async updateNote(
    id: number,
    title: string,
    author: string,
    cues: string,
    notes: string,
    summary: string
  ): Promise<any> {
    const note = await Note.findByPk(id);
    if (note) {
      note.title = title;
      note.author = author;
      note.cues = cues;
      note.notes = notes;
      note.summary = summary;
      await note.save();
    } else {
      throw new Error("Note not found");
    }
    return note;
  }

  public async deleteNoteById(id: number): Promise<void> {
    const note = await Note.findByPk(id);
    console.log("Note:");
    console.log(note);
    if (note) {
      console.log(`Note ${id} deleted`);
      await note.destroy();
    } else {
      throw new Error("Note not found");
    }

    return;
  }
}
