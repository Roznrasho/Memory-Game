import {  movesElement, timerElement } from "../main";
import { card } from "./initializeGame";
import { timerInterval } from "./startTimer";
import { renderCards, shuffleCarde } from "./shuffleAndRender";
import { gameState } from "../gameStateData/gameState";

function restartGame(): void {
  // Reset game state
  card.forEach((card) => {
    card.isFlipped = false;
    card.isMatched = false;
  });
  gameState.flippedCards.length = 0;
  gameState.matchedPairs.length = 0;
  gameState.moves = 0;
  gameState.timer = 0;
  gameState.gameStarted = false; // Wichtig, um sicherzustellen, dass der Timer erneut gestartet werden kann
  movesElement.textContent = "0";
  timerElement.textContent = "0:00";

  // Clear timer if it's running
  if (timerInterval) {
    clearInterval(timerInterval);
    gameState.timerInterval = null;
  }

  // Shuffle and render
  shuffleCarde(card);
  renderCards(card);
}
export { restartGame };
