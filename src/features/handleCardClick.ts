import { Card, flippedCards } from "../main";
import { checkMatch } from "./checkMatch";
import { startTimer } from "./startTimer";

let gameStarted: boolean = false;
let moves: number = 0;

// handleCardClick-Funktion
function handleCardClick(card: Card, cardElement: HTMLDivElement): void {
  // Verhindere Klicks auf bereits zugeordnete oder umgedrehte Karten oder wenn bereits 2 Karten ausgewählt sind
  if (card.isMatched || card.isFlipped || flippedCards.length >= 2) return;

  // Starte den Timer beim ersten Klick
  if (!gameStarted) {
    startTimer();
    gameStarted = true;
  }
  // Markiere die Karte als umgedreht und füge sie zum flippedCards-Array hinzu
  card.isFlipped = true;
  flippedCards.push(card);

  // Aktualisiere die Klasse des DOM-Elements, um die Karte visuell zu drehen
  cardElement.className = `card ${
    card.isFlipped || card.isMatched ? "flipped" : ""
  }`;

  // Wenn 2 Karten ausgewählt wurden, prüfe, ob sie ein Paar sind
  if (flippedCards.length === 2) {
    moves++;

    // Überprüfe, ob die Karten ein Match sind
    if (flippedCards[0].value === flippedCards[1].value) {
      // Karten passen zusammen: Markiere sie als "matched" und leere flippedCards
      flippedCards[0].isMatched = true;
      flippedCards[1].isMatched = true;
      flippedCards.length = 0; // Array leeren
    } else {
      // Karten passen nicht zusammen: Schließe sie nach einer kurzen Verzögerung
      setTimeout(() => {
        flippedCards.forEach((flippedCard) => {
          flippedCard.isFlipped = false;

          // Aktualisiere die Klasse der Karten im DOM
          const cardElements = document.querySelectorAll(".card");
          cardElements.forEach((element) => {
            const cardValue = element.querySelector(".card-back")?.textContent;
            if (cardValue === flippedCard.value) {
              element.classList.remove("flipped");
            }
          });
        });

        flippedCards.length = 0; // Array leeren
      }, 1000); // 1 Sekunde Verzögerung, bevor die Karten wieder zugedeckt werden
    }
  }
}

export { handleCardClick };
