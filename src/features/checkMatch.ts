import { card, matchedPairs, flippedCards } from "../main";
import { renderCards } from "./shuffleAndRender";
import { endGame } from "./endGame";


function checkMatch(): void {
  
  const [card1, card2] = flippedCards;
  if (card1.value === card2.value) {
    card1.isMatched = true;
    card2.isMatched = true;
    matchedPairs.push(card1, card2);
    if (card.every((card) => card.isMatched)) {
      endGame();
    }
  } else {
    card1.isFlipped = false;
    card2.isFlipped = false;
  }

  flippedCards.length = 0;
  renderCards(card);
}


export { checkMatch};