import { Card } from "../main";
import { checkMatch } from "./checkMatch";
import { flippedCards, gameStarted, moves, startTimer } from "../main";

// handleCardClick-Funktion
function handleCardClick(
  card: Card,
  //cards: Card[],
  //renderCards: () => void,
  //movesDisplay: HTMLElement,
  //timerElement: HTMLElement,
  //onGameEnd: () => void
): void {
  if (card.isMatched || card.isFlipped || flippedCards.length >= 2) return;

  if (!gameStarted) {
    startTimer();
    gameStarted = true;
  }

  card.isFlipped = true;
  flippedCards.push(card);
  renderCards();

  if (flippedCards.length === 2) {
    moves++;
    movesDisplay.textContent = moves.toString();
    setTimeout(() => {
      checkMatch(flippedCards, renderCards, onGameEnd);
      flippedCards = [];
    }, 500);
  }
}

export { handleCardClick };