import { Card } from "../main";
import { checkMatch } from "./checkMatch";
import { flippedCards} from "../main";
import { startTimer } from "./startTimer";

let gameStarted: boolean = false;
let moves: number = 0;

// handleCardClick-Funktion
function handleCardClick(card: Card, cardElement: HTMLDivElement): void {
  if (card.isMatched || card.isFlipped || flippedCards.length >= 2) return;

  if (!gameStarted) {
    startTimer();
    gameStarted = true;
  }

  card.isFlipped = true;
  flippedCards.push(card);
  cardElement.className = `card ${
    card.isFlipped || card.isMatched ? "flipped" : ""
  }`; // Set the class name based on the card's state

  if (flippedCards.length === 2) {
    moves++;
    checkMatch();
  }
}

export { handleCardClick };
