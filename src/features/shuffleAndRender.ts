
import { handleCardClick } from "./handleCardClick";
import { memoryGame } from "../main";
import { Card } from "../memoryGameState/MemoryGameState";

const shuffleCarde = (card: Card[]): void => {
  // Shuffles an array of card in place using the Fisher-Yates algorithm.
  for (let i = card.length - 1; i > 0; i--) {
    // Loop over the array from the last element to the second element
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index from 0 to i
    [card[i], card[j]] = [card[j], card[i]]; // Swap the elements at indices i and j
  }
};

// Define the renderCards function to render the card on the memory game board
function renderCards(
  // The HTML element representing the memory game board
  card: Card[] // The array of card objects to be rendered
  // The function to handle card clicks
): void {
  memoryGame.innerHTML = ""; // Clear the existing content of the memory game board
  card.forEach((card) => {
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

export { shuffleCarde, renderCards };
