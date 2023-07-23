// Get form data
import noteAPI from "../api/noteAPI";
import { getExistingNotes } from "./getExistingNotes";

const getFormData = (): any => {
  const title = document.getElementById("note-title") as HTMLInputElement;
  const author = document.getElementById("note-author") as HTMLInputElement;
  const cues = document.getElementById("cues") as HTMLInputElement;
  const notes = document.getElementById("notes") as HTMLInputElement;
  const summary = document.getElementById("summary") as HTMLInputElement;

  const titleValue = title.value;
  const authorValue = author.value;
  const cuesValue = cues.value;
  const notesValue = notes.value;
  const summaryValue = summary.value;

  return {
    title: titleValue,
    author: authorValue,
    cues: cuesValue,
    notes: notesValue,
    summary: summaryValue,
  };
};

export function sendFormData() {
  const form = document.getElementById("note-form") as HTMLFormElement;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = getFormData();
    console.log(formData);

    noteAPI
      .createNote(formData)
      .then((res) => {
        console.log(res);
        getExistingNotes();
        clearFormFields();
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

function clearFormFields() {
  const title = document.getElementById("note-title") as HTMLInputElement;
  const author = document.getElementById("note-author") as HTMLInputElement;
  const cues = document.getElementById("cues") as HTMLInputElement;
  const notes = document.getElementById("notes") as HTMLInputElement;
  const summary = document.getElementById("summary") as HTMLInputElement;

  title.value = "";
  author.value = "";
  cues.value = "";
  notes.value = "";
  summary.value = "";
}
