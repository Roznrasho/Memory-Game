import { movesElement, timerElement } from "../main";
import { cards } from "./initializeGame";
import { timerInterval } from "./startTimer";
import { renderCards, shuffleCards } from "./shuffleAndRender";
import { gameState } from "../gameStateData/gameState";

function restartGame(): void {
  // Reset game state
  cards.forEach((card) => {
    card.isFlipped = false;
    card.isMatched = false;
  });
  gameState.flippedCards.length = 0;
  gameState.matchedPairs.length = 0;
  gameState.moves = 0;
  gameState.timer = 0;
  gameState.gameStarted = false; 
  movesElement.textContent = "0";
  timerElement.textContent = "0:00";
  // Clear timer if it's running
  if (timerInterval) {
    clearInterval(timerInterval);
    gameState.timerInterval = null;
  }

  shuffleCards(cards);
  renderCards(cards);
}
export { restartGame };
