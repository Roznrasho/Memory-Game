<<<<<<< HEAD:src/featurs/endGame.ts
import { timerInterval } from "../main";


function endGame(): void {
    if (timerInterval) {
      clearInterval(timerInterval);
    }
}
export { endGame };
=======
import { timerInterval } from "./startTimer";

function endGame(): void {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
}
export { endGame };
>>>>>>> 14-in-review:src/features/endGame.ts
