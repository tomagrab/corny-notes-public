import "../assets/styles/style.scss";

import { sidebarToggle } from "./components/sidebar";
import { formToggle } from "./components/form";
import { sendFormData } from "./components/getFormData";
import { getExistingNotes } from "./components/getExistingNotes";

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", async () => {
  sidebarToggle();
  formToggle();
  sendFormData();
  await getExistingNotes();

  const noteArea = document.getElementById("note-area");
  if (noteArea) {
  }

  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
  }
});
