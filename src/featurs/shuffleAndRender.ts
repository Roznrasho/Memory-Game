import { Card } from "../main";

const shuffleCarde = (cards: Card[]): void => {
  // Shuffles an array of cards in place using the Fisher-Yates algorithm.
  for (let i = cards.length - 1; i > 0; i--) {
    // Loop over the array from the last element to the second element
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index from 0 to i
    [cards[i], cards[j]] = [cards[j], cards[i]]; // Swap the elements at indices i and j
  }
};

// Define the renderCards function to render the cards on the memory game board
function renderCards(
  memoryGame: HTMLDivElement, // The HTML element representing the memory game board
  cards: Card[], // The array of card objects to be rendered
  handleCardClick: (cards: Card) => void // The function to handle card clicks
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
    cardElement.addEventListener("click", () => handleCardClick(card)); // Add a click event listener to the card element
    memoryGame.appendChild(cardElement);
  });
}

export { shuffleCarde, renderCards };
