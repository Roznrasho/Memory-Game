import {
  cards,
  flippedCards,
  gameStarted,
  moves,
  movesElement,
  timerElement,
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
  movesElement.textContent;
  timerElement.textContent;

  // Clear timer if it's running
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval;
  }


  // Shuffle and render
  shuffleCarde(cards);
  renderCards (cards);
}
export { restartGame };
