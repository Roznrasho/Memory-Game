import { Card, movesElement, timerElement } from "../main";
import { checkMatch } from "./checkMatch";
import { flippedCards} from "../main";
import { startTimer, timerInterval } from "./startTimer";

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
   movesElement.textContent = `${moves}`
   timerElement.textContent =  `${timerInterval}`
    checkMatch();
  }
}

export { handleCardClick };
