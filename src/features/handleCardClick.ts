import { gameState } from "../gameStateData/gameState";
import { movesElement } from "../main";
import { Card } from "../memoryGameState/MemoryGameState";
import { startTimer } from "./startTimer";
import { checkMatch } from "./checkMatch";

// handleCardClick-Funktion
function handleCardClick(card: Card, cardElement: HTMLDivElement): void {
  // Verhindere Klicks auf bereits zugeordnete oder umgedrehte Karten oder wenn bereits 2 Karten ausgewählt sind
  if (card.isMatched || card.isFlipped || gameState.flippedCards.length >= 2)
    return;

  // Starte den Timer beim ersten Klick
  if (!gameState.gameStarted) {
    startTimer();
    gameState.gameStarted = true;
  }
  // Markiere die Karte als umgedreht und füge sie zum flippedCards-Array hinzu
  card.isFlipped = true;
  gameState.flippedCards.push(card);

  // Aktualisiere die Klasse des DOM-Elements, um die Karte visuell zu drehen
  cardElement.className = `card ${
    card.isFlipped || card.isMatched ? "flipped" : ""
  }`;

  // Wenn 2 Karten ausgewählt wurden, prüfe, ob sie ein Paar sind
  if (gameState.flippedCards.length === 2) {
    gameState.moves++;
    movesElement.textContent = gameState.moves.toString(); // Aktualisiere die Züge im UI
    checkMatch();
    // Überprüfe, ob die Karten ein Match sind
    if (gameState.flippedCards[0].value === gameState.flippedCards[1].value) {
      // Karten passen zusammen: Markiere sie als "matched" und leere flippedCards
      gameState.flippedCards[0].isMatched = true;
      gameState.flippedCards[1].isMatched = true;
      gameState.flippedCards.length = 0; // Array leeren
      
    } else {
      // Karten passen nicht zusammen: Schließe sie nach einer kurzen Verzögerung
      setTimeout(() => {
        gameState.flippedCards.forEach((flippedCard) => {
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

        gameState.flippedCards.length = 0; // Array leeren
      }, 1000); // 1 Sekunde Verzögerung, bevor die Karten wieder zugedeckt werden
    }
  }
}

export { handleCardClick };
