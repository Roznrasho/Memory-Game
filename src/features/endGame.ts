import { timerInterval } from "../main";


function endGame(): void {
    if (timerInterval) {
      clearInterval(timerInterval);
    }
}
export { endGame };
