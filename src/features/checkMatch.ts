//const body = document.querySelector("body") as HTMLBodyElement;
import { renderCards } from "./shuffleAndRender";
import { endGame } from "./endGame";
import { cards } from "./initializeGame";
import { gameState } from "../gameStateData/gameState";
//import { startConfettiAnimation } from "./confetti"; 
//import { memoryGame } from "../main";

function checkMatch(): void {
  const [card1, card2] = gameState.flippedCards;
  if (card1.value === card2.value) {
    card1.isMatched = true;
    card2.isMatched = true;
    gameState.matchedPairs.push(card1, card2);
    if (cards.every((card) => card.isMatched)) {
     // startConfettiAnimation();
     // console.log("✅ Alle Karten sind gematcht! Spiel endet jetzt.");
     // body.style.background = "red";
     alert(`🎉 Herzlichen Glückwunsch! Du hast das Spiel in ${gameState.moves} Zügen abgeschlossen.`);
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
