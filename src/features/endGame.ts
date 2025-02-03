import { timerInterval } from "./startTimer";

function endGame(): void {
  if (timerInterval) {
    clearInterval(timerInterval);
    console.log("🏁 Spiel beendet");
    
  }
}
export { endGame };
