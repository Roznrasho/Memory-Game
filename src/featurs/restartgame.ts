import {
  cards,
  flippedCards,
  gameStarted,
  moves,
  movesDisplay,
  timeDisplay,
  timerInterval,
} from "../main";

import { renderCards, shuffleCarde } from "./shuffleAndRender";

function restartGame(): void {
  // Reset game state
  cards.forEach((card) => {
    card.isFlipped = false;
    card.isMatched = false;
  });
  flippedCards;
  moves;
  gameStarted;
  movesDisplay.textContent;
  timeDisplay.textContent;

  // Clear timer if it's running
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval;
  }


  // Shuffle and render
  shuffleCarde();
  renderCards();
}
export { restartGame };
