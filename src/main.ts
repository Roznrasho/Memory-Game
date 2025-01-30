import { restartGame } from "./features/restartgame";
import "./style.css";

import { setUpGameButtons } from "./features/setUpGameButton";

const memoryGame = document.getElementById("gameBoard") as HTMLDivElement;
const timerElement = document.getElementById("time") as HTMLSpanElement;
const movesElement = document.getElementById("moves") as HTMLSpanElement;
const restartButton = document.getElementById(
  "restartButton"
) as HTMLButtonElement;

restartButton?.addEventListener("click", restartGame);

document.addEventListener("DOMContentLoaded", () => {
  setUpGameButtons();
});

export { restartButton, memoryGame, timerElement, movesElement };
