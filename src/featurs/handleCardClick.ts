import { Card } from "../main";
import { checkMatch } from "./checkMatch";
import { flippedCards} from "../main";
import { startTimer } from "./startTimer";

let gameStarted: boolean = false;
let moves: number = 0;

// handleCardClick-Funktion
function handleCardClick(cards: Card): void {
  if (cards.isMatched || cards.isFlipped || flippedCards.length >= 2) return;

  if (!gameStarted) {
    startTimer();
    gameStarted = true;
  }

  cards.isFlipped = true;
  flippedCards.push(cards);

  if (flippedCards.length === 2) {
    moves++;
    checkMatch();
  }
}

export { handleCardClick };
