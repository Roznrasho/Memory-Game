import { initializeGame } from "./initializeGame";

function setUpGameButtons() {
  const start12Button = document.getElementById(
    "start-12"
  ) as HTMLButtonElement;
  const start18Button = document.getElementById(
    "start-18"
  ) as HTMLButtonElement;
  
  console.log('start:',start18Button);
  const start24Button = document.getElementById(
    "start-24"
  ) as HTMLButtonElement;
  console.log('start24Button:',start24Button);

  start12Button?.addEventListener("click", () => {
    initializeGame(12);
  });
  start18Button?.addEventListener("click", () => {
    initializeGame(18);
   
  });

  start24Button?.addEventListener("click", () => {
    initializeGame(24);
  });
}
console.log('setUpGameButtons:',setUpGameButtons);
export { setUpGameButtons };
