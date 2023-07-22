import { Note } from "../Models/notesModel";

export class NotesDAO {
  public async getAllNotes(): Promise<Note[]> {
    return Note.findAll();
  }

  public async getNoteById(id: number): Promise<Note | null> {
    return Note.findByPk(id);
  }

  public async createNote(
    title: string,
    author: string,
    cues: string,
    notes: string,
    summary: string
  ): Promise<Note> {
    return Note.create({ title, author, cues, notes, summary });
  }

  public async updateNote(
    id: number,
    title: string,
    author: string,
    cues: string,
    notes: string,
    summary: string
  ): Promise<Note> {
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
    if (note) {
      await note.destroy();
    } else {
      throw new Error("Note not found");
    }

    return;
  }
}
