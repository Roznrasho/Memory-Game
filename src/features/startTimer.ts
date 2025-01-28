import { gameState } from "../gameStateData/gameState";
import { timerElement} from "../main";

let timerInterval: number | null = null;

function startTimer(): void {
  gameState.timer = Date.now();
  timerInterval = window.setInterval(() => {
    const elapsedTime = Math.floor((Date.now() - gameState.timer) / 1000);
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    timerElement.textContent = `${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }, 1000);
}

function stopTimer(): void {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

export { startTimer, stopTimer, timerInterval };
