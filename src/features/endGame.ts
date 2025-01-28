import { timerInterval } from "./startTimer";

function endGame(): void {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
}
export { endGame };
