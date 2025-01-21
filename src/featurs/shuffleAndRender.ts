const shuffleCarde = (cards: any[]): void => {
  // Shuffles an array of cards in place using the Fisher-Yates algorithm.

  for (let i = cards.length - 1; i > 0; i--) {
    // Loop over the array from the last element to the second element

    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index from 0 to i

    [cards[i], cards[j]] = [cards[j], cards[i]]; // Swap the elements at indices i and j
  }
};

export { shuffleCarde };
