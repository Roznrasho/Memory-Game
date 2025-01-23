import {
  cards,
  flippedCards,
  gameStarted,
  moves,
  movesElement,
  timerElement,
  timerInterval,
  memoryGame,
  
} from "../main";

import { renderCards, shuffleCarde } from "./shuffleAndRender";
import { handleCardClick } from "./handleCardClick";

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
  renderCards(memoryGame, cards, handleCardClick);
}
export { restartGame };
