export function formToggle() {
  const toggleButton = document.getElementById(
    "toggle-form"
  ) as HTMLButtonElement;
  const noteForm = document.getElementById("note-form") as HTMLFormElement;

  toggleButton.addEventListener("click", () => {
    if (noteForm.classList.contains("collapsed")) {
      noteForm.classList.remove("collapsed");
      toggleButton.textContent = "Hide Notes";
    } else {
      noteForm.classList.add("collapsed");
      toggleButton.textContent = "New Note";
    }
  });
}
