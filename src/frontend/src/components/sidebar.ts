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
      sidebar.style.width = "";
      sidebar.classList.add("collapsed");
      toggleBTN.classList.add("toggled");
    }
  });
}

export function dragSidebar() {
  console.log("Dragsidebar: This works");
  const sidebar = document.getElementById("sidebar") as HTMLDivElement;
  const noteArea = document.getElementById("note-area") as HTMLDivElement;

  let startX: number;
  let startWidth: number;
  const minSidebarWidth = 200;

  noteArea.addEventListener("mousedown", (e) => {
    const rect = noteArea.getBoundingClientRect();

    // If the cursor is not over the border of the note area, return
    if (Math.abs(e.clientX - rect.left) > 5) {
      return;
    }

    startX = e.clientX;
    startWidth = sidebar.offsetWidth;
    noteArea.style.pointerEvents = "none";
    document.body.style.userSelect = "none";
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", stopDrag);
  });

  noteArea.addEventListener("mousemove", (e) => {
    const rect = noteArea.getBoundingClientRect();
    if (e.clientX - rect.left <= 5) {
      noteArea.style.cursor = "col-resize";
    } else {
      noteArea.style.cursor = "default";
    }
  });

  noteArea.addEventListener("mouseleave", (e) => {
    noteArea.style.cursor = "default";
  });

  const drag = (e: any) => {
    console.log("Drag: This works");
    const dx = startX - e.pageX;
    const newSideBarWidth = startWidth - dx;
    sidebar.classList.add("no-transition");
    noteArea.classList.add("no-transition");

    if (newSideBarWidth > minSidebarWidth) {
      sidebar.style.width = `${newSideBarWidth}px`;
      sidebar.classList.remove("collapsed");
    }

    if (newSideBarWidth <= minSidebarWidth) {
      sidebar.style.width = "";
      sidebar.classList.remove("no-transition");
      sidebar.classList.add("collapsed");
    }
  };

  const stopDrag = () => {
    console.log("StopDrag: This works");
    noteArea.style.pointerEvents = "";
    noteArea.classList.remove("no-transition");
    sidebar.classList.remove("no-transition");
    document.body.style.userSelect = "highlight";
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", stopDrag);
  };
}
