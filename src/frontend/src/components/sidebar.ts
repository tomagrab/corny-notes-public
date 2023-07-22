// Sidebar functionality

export function sidebarToggle() {
  const sidebar = document.getElementById("sidebar") as HTMLDivElement;
  const toggleBTN = document.getElementById(
    "toggle-sidebar"
  ) as HTMLButtonElement;

  toggleBTN.addEventListener("click", () => {
    if (sidebar.classList.contains("collapsed")) {
      sidebar.classList.remove("collapsed");
      toggleBTN.classList.remove("toggled");
    } else {
      sidebar.classList.add("collapsed");
      toggleBTN.classList.add("toggled");
    }
  });
}
