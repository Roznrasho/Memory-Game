import { shiftContentUp } from "../functions_css/shiftContentUp";
import { initializeGame } from "./initializeGame";

function setUpGameButtons() {
  const start12Button = document.getElementById(
    "start-12"
  ) as HTMLButtonElement;
  const start18Button = document.getElementById(
    "start-18"
  ) as HTMLButtonElement;

  console.log("start:", start18Button);
  const start24Button = document.getElementById(
    "start-24"
  ) as HTMLButtonElement;

  start12Button?.addEventListener("click", () => {
    initializeGame(12);
    shiftContentUp();
  });
  start18Button?.addEventListener("click", () => {
    initializeGame(18);
    shiftContentUp();
  });

  start24Button?.addEventListener("click", () => {
    initializeGame(24);
    shiftContentUp();
  });
}
export { setUpGameButtons };
