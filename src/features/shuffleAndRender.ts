import { handleCardClick } from "./handleCardClick";
import { memoryGame } from "../main";
import { Card } from "../memoryGameState/MemoryGameState";

/**
 * Shuffles an array of cards in place using the Fisher-Yates algorithm.
 *
 * @param {Card[]} cards - The array of cards to be shuffled.
 *
 * The function iterates over the array from the last element to the second element,
 * generating a random index for each element and swapping the elements at the current
 * index and the random index.
 */
const shuffleCards = (cards: Card[]): void => {
  // Shuffles an array of card in place using the Fisher-Yates algorithm.
  for (let i = cards.length - 1; i > 0; i--) {
    // Loop over the array from the last element to the second element
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index from 0 to i
    [cards[i], cards[j]] = [cards[j], cards[i]]; // Swap the elements at indices i and j
  }
};

// Define the renderCards function to render the card on the memory game board
/**
 * Renders the memory game cards on the game board.
 *
 * @param {Card[]} cards - The array of card objects to be rendered.
 *
 * The function clears the existing content of the memory game board and creates
 * a new div element for each card. It sets the class name based on the card's state
 * (flipped or matched) and sets the inner HTML of the card element. A click event
 * listener is added to each card element to handle card clicks.
 *
 * The card elements are then appended to the memory game board.
 */
function renderCards(
  // The HTML element representing the memory game board
  cards: Card[] // The array of card objects to be rendered
  // The function to handle card clicks
): void {
  memoryGame.innerHTML = ""; // Clear the existing content of the memory game board
  cards.forEach((card) => {
    const cardElement = document.createElement("div"); // Create a new div element for the card
    cardElement.className = `card ${
      card.isFlipped || card.isMatched ? "flipped" : ""
    }`; // Set the class name based on the card's state
    cardElement.innerHTML = `
                         <div class="card-front"></div>
                        <div class="card-back">${card.value}</div>`; // Set the inner HTML of the card element
    cardElement.addEventListener("click", () =>
      handleCardClick(card, cardElement)
    ); // Add a click event listener to the card element

    memoryGame.appendChild(cardElement);
  });
}

export { shuffleCards, renderCards };
