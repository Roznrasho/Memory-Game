# Memory-Game

### Description
The Memory Game is a classic card game where the player must find pairs of cards by flipping two cards at the same time. The goal is to uncover all pairs as quickly as possible. This project was developed to practice basic frontend skills, including HTML, CSS, and TypeScript, as well as to create an engaging and user-friendly design. The project was handled as an SPA using Vite.

### Features
- Interactive game board with animated cards.
- Time tracking: Track how long it takes to find all pairs.
- Move counter: Displays the number of moves taken.
- Responsive design: Optimized for different screen sizes (desktop, tablet, mobile).
- Restart button: Option to restart the game at any time.

### Basic Structure

#### HTML (index.html)
The HTML file contains the basic structure of the game:
- A game area (Game Board) where the cards are displayed.
- An area to display the timer and moves.
- A button to reset the game.

#### CSS (styles.css)
The CSS provides the design of the game:
- A flexible grid layout for the cards.
- Animations for flipping the cards.
- Colors, fonts, and spacing that make the game visually appealing.

#### TypeScript (script.ts)
The TypeScript file contains the game logic:
- Generation and random shuffling of the cards.
- Event listeners to flip the cards.
- Logic to check if two cards match.
- Timer and move tracking.

### Main Functions:
- `generateBoard()`: Creates the game board with cards.
- `shuffleCards()`: Randomly shuffles the cards.
- `flipCard(event)`: Flips a card and checks for a match.
- `startTimer()`: Starts the timer when the player flips the first card.
- `resetGame()`: Resets the game.

### Example of a Card Data Structure
```Typescript
const cards = [
    { id: 1, img: 'assets/card1.png' },
    { id: 1, img: 'assets/card1.png' },
    { id: 2, img: 'assets/card2.png' },
    { id: 2, img: 'assets/card2.png' },
    // More card pairs...
];
```

### Possible Extensions
- Difficulty level: Increase the number of cards for more challenges.
- Highscore: Save the fastest time and fewest moves in LocalStorage.
- More animations: Add more visual effects when flipping the cards.
- Sound effects: Play sound when a pair is found.