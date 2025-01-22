import { flippedCards, cards, matchedPairs, Card } from '../main';
import { renderCards } from './shuffleAndRender';
import { endGame } from ';

export { checkMatch, endGame };
 

function checkMatch(): void {
    const [card1, card2] = matchedPairs;
    if (card1.value === card2.value) {
      card1.isMatched = true;
      card2.isMatched = true;
      
      if (cards.every(card => card.isMatched)) {
        endGame();
      }
    } else {
      card1.isFlipped = false;
      card2.isFlipped = false;
    }
    
   matchedPairs;
    renderCards();
  }