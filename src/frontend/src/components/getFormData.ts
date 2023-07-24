// Get form data
import noteAPI from "../api/noteAPI";
import { getExistingNotes } from "./getExistingNotes";

const getFormData = (): any => {
  const title =
    (document.getElementById("note-title") as HTMLInputElement).value.trim() ||
    "Untitled";
  const author =
    (document.getElementById("note-author") as HTMLInputElement).value.trim() ||
    "No one";
  const cues =
    (document.getElementById("cues") as HTMLTextAreaElement).value.trim() ||
    "No cues";
  const notes =
    (document.getElementById("notes") as HTMLTextAreaElement).value.trim() ||
    "No notes";
  const summary =
    (document.getElementById("summary") as HTMLTextAreaElement).value.trim() ||
    "No summary";

  if (
    title === "Untitled" ||
    author === " No one" ||
    cues === "No cues" ||
    notes === "No notes" ||
    summary === "No summary"
  ) {
    alert("Please write something!");
    return;
  }

  const formData = {
    title: title,
    author: author,
    cues: cues,
    notes: notes,
    summary: summary,
  };

  return formData;
};

export function sendFormData() {
  const form = document.getElementById("note-form") as HTMLFormElement;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = getFormData();

    if (formData.id) {
      noteAPI
        .getnoteById(formData.id)
        .then((existingNote) => {
          if (existingNote) {
            noteAPI.updateNote(formData).then((res) => {
              getExistingNotes();
              clearFormFields();
            });
          } else {
            noteAPI
              .createNote(formData)
              .then((res) => {
                getExistingNotes();
                clearFormFields();
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      noteAPI
        .createNote(formData)
        .then((res) => {
          getExistingNotes();
          clearFormFields();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
}

function clearFormFields() {
  const title = document.getElementById("note-title") as HTMLInputElement;
  const author = document.getElementById("note-author") as HTMLInputElement;
  const cues = document.getElementById("cues") as HTMLInputElement;
  const notes = document.getElementById("notes") as HTMLInputElement;
  const summary = document.getElementById("summary") as HTMLInputElement;
  const noteID = document.getElementById("note-id") as HTMLInputElement;

  title.value = "";
  author.value = "";
  cues.value = "";
  notes.value = "";
  summary.value = "";
  noteID.value = "";
}
