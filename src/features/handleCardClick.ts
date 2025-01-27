import { Card } from "../main";
import { checkMatch } from "./checkMatch";
import { flippedCards} from "../main";
import { startTimer } from "./startTimer";

let gameStarted: boolean = false;
let moves: number = 0;

// handleCardClick-Funktion
<<<<<<< HEAD
function handleCardClick(card: Card, cardElement: HTMLDivElement): void {
  if (card.isMatched || card.isFlipped || flippedCards.length >= 2) return;
=======
function handleCardClick(cards: Card): void {
  console.log(handleCardClick);
  
  if (cards.isMatched || cards.isFlipped || flippedCards.length >= 2) return; // Return if the card is already matched, flipped, or there are already two flipped cards // gebe zurück, wenn die Karte bereits übereinstimmt, umgedreht ist oder bereits zwei Karten umgedreht sind
>>>>>>> 8ed75ed99b3247a7a696e6265f26078f16ccd1d5

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
