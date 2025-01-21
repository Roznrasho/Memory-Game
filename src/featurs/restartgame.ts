import { cards, flippedCards, gameStarted, moves, movesDisplay, timeDisplay, timerInterval ,} from "../main";

function restartGame(): void {
    // Reset game state
        cards.forEach(card => {
      card.isFlipped = false;
      card.isMatched = false;
    });
     flippedCards 
    moves
    gameStarted 
     movesDisplay.textContent 
     timeDisplay.textContent 
    
    // Clear timer if it's running
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval
    }
    
    // Shuffle and render
    shuffleCards();
    renderCards();
  }
export { restartGame };