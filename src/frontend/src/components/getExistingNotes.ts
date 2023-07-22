import noteAPI from "../api/noteAPI";
import { makeDraggable, enableDrop } from "./dragAndDrop";

export async function getExistingNotes() {
  // Get existing notes
  const notesfromDB = await noteAPI.getNotes();
  console.log(notesfromDB);

  // Set in descending order
  notesfromDB.sort((a: any, b: any) => {
    return b.dataValues.createdAt - a.dataValues.createdAt;
  });

  // Get the notes display container
  const notes = document.getElementById("notes-display") as HTMLDivElement;

  // Clear any existing notes from the display
  while (notes.firstChild) {
    notes.removeChild(notes.firstChild);
  }

  // Create and append the notes to the display
  notesfromDB.forEach((note: any) => {
    const noteElement = createNoteElement(note);
    notes.appendChild(noteElement);
  });
}

function createNoteElement(note: any) {
  const noteDiv = document.createElement("div");
  noteDiv.id = `note-${note.dataValues.id}`;
  noteDiv.classList.add("note");
  noteDiv.setAttribute("draggable", "true");

  makeDraggable(noteDiv);

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("note__header");

  const titleH3 = document.createElement("h3");
  titleH3.classList.add("note__title");
  titleH3.textContent = "Title: ";

  const titleSpan = document.createElement("span");
  titleSpan.contentEditable = "true";
  titleSpan.textContent = `${note.dataValues.title}`;
  titleSpan.addEventListener("input", () => {
    note.dataValues.title = titleSpan.textContent;
    noteAPI.updateNote(note.dataValues);
  });
  titleH3.appendChild(titleSpan);

  const authorP = document.createElement("p");
  authorP.classList.add("note__author");
  authorP.textContent = "Author: ";

  const authorSpan = document.createElement("span");
  authorSpan.contentEditable = "true";
  authorSpan.textContent = `${note.dataValues.author}`;
  authorSpan.addEventListener("input", () => {
    note.dataValues.author = authorSpan.textContent;
    noteAPI.updateNote(note.dataValues);
  });
  authorP.appendChild(authorSpan);

  headerDiv.appendChild(titleH3);
  headerDiv.appendChild(authorP);

  const bodyDiv = document.createElement("div");
  bodyDiv.classList.add("note__body");

  // Add cues, notes, and summary sections
  const sections = ["cues", "notes", "summary"];

  sections.forEach((section) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add(`note__${section}`);

    const sectionTitleH4 = document.createElement("h4");
    sectionTitleH4.classList.add(`note__${section}-title`);
    sectionTitleH4.textContent =
      section.charAt(0).toUpperCase() + section.slice(1);

    const sectionTextP = document.createElement("p");
    sectionTextP.classList.add(`note__${section}-text`);
    sectionTextP.contentEditable = "true";
    sectionTextP.textContent = note.dataValues[section];
    sectionTextP.addEventListener("input", () => {
      note.dataValues[section] = sectionTextP.textContent;
      noteAPI.updateNote(note.dataValues);
    });

    sectionDiv.appendChild(sectionTitleH4);
    sectionDiv.appendChild(sectionTextP);

    bodyDiv.appendChild(sectionDiv);
  });

  noteDiv.appendChild(headerDiv);
  noteDiv.appendChild(bodyDiv);

  return noteDiv;
}
