// Make notes draggable

export function makeDraggable(element: HTMLElement) {
  element.addEventListener("dragstart", (e: DragEvent) => {
    e.dataTransfer?.setData("text/plain", element.id);
  });
}

export function enableDrop(target: HTMLElement) {
  target.addEventListener("dragover", (e: DragEvent) => {
    e.preventDefault();
  });

  target.addEventListener("drop", (e: DragEvent) => {
    e.preventDefault();
    const id = e.dataTransfer?.getData("text/plain");
    const draggedElement = document.getElementById(id!);

    if (draggedElement) {
      target.appendChild(draggedElement);
    }
  });
}
