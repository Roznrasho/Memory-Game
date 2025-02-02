//function to shift the contnet up, after the game is started

function shiftContentUp(): void {
  const container = document.getElementById("container") as HTMLDivElement;
  if (container) {
    container.classList.add("shift-up");
  }
}

export { shiftContentUp };

/* The "classList" property in JavaScript is a built-in property of elements in the DOM (Document Object Model) that provides an interface for editing the classes of an element. It allows adding, removing, and toggling CSS classes on an element.
 */
