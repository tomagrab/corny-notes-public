// API interaction

const getNotes = () => {
  return window.api.invoke("getAllNotes");
};

const getnoteById = (id: string) => {
  return window.api.invoke("getNoteById", id);
};

const createNote = (noteData: any) => {
  return window.api.invoke("createNote", noteData);
};

const updateNote = (noteData: any) => {
  return window.api.invoke("updateNote", noteData);
};

const deleteNote = (id: string) => {
  return window.api.invoke("deleteNote", id);
};

export default {
  getNotes,
  getnoteById,
  createNote,
  updateNote,
  deleteNote,
};
