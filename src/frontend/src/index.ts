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
