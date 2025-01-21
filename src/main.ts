import './style.css'

interface Card {
    id: number;
    value: string;
    isFlipped: boolean;
    isMatched: boolean;
}

// Get references to DOM elements
const memoryGame = document.getElementById("gameBoard");
const timerElement = document.getElementById("time");
const movesElement = document.getElementById("moves");
const restartButton = document.getElementById("restartButton");