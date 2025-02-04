import { renderCards } from "./shuffleAndRender";
import { endGame } from "./endGame";
import { cards } from "./initializeGame";
import { gameState } from "../gameStateData/gameState";

function checkMatch(): void {
  const [card1, card2] = gameState.flippedCards;
  if (card1.value === card2.value) {
    card1.isMatched = true;
    card2.isMatched = true;
    gameState.matchedPairs.push(card1, card2);
    if (cards.every((card) => card.isMatched)) {
      endGame();
    }
  } else {
    card1.isFlipped = false;
    card2.isFlipped = false;
  }

  gameState.flippedCards.length = 0;
  renderCards(cards);
}

export { checkMatch };