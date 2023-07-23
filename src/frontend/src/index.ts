import "../assets/styles/style.scss";

import { sidebarToggle } from "./components/sidebar";
import { sendFormData } from "./components/getFormData";
import { getExistingNotes } from "./components/getExistingNotes";
import { enableDrop } from "./components/dragAndDrop";

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", async () => {
  sidebarToggle();
  sendFormData();
  await getExistingNotes();

  const noteArea = document.getElementById("note-area");
  if (noteArea) {
    enableDrop(noteArea);
  }

  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    enableDrop(sidebar);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById(
    "toggle-form"
  ) as HTMLButtonElement;
  const noteForm = document.getElementById("note-form") as HTMLFormElement;
  const formContainer = document.getElementById(
    "form-container"
  ) as HTMLDivElement;

  toggleButton.addEventListener("click", () => {
    if (noteForm.classList.contains("hidden")) {
      noteForm.classList.remove("hidden");
      formContainer.classList.remove("collapsed");
      toggleButton.textContent = "Collapse";
    } else {
      noteForm.classList.add("hidden");
      formContainer.classList.add("collapsed");
      toggleButton.textContent = "New Note";
    }
  });
});
