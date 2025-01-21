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

//game state variables
let cards: Card[] = []; // array to store all cards / Array zum Speichern aller Karten
let flippedCards: Card[] = []; // array to store flipped cards / Array zum Speichern der umgedrehten Karten
let matchedPairs = 0; // number of matched pairs / Anzahl der übereinstimmenden Paare
let moves: number = 0; // number of moves / Anzahl der Züge
let timer: number = 0; // timer in seconds / Timer in Sekunden
let timerInterval: number | null; // interval to update timer / Intervall zum Aktualisieren des Timers
let gameStarted: boolean = false; // flag to check if game has started / Flagge zur Überprüfung, ob das Spiel gestartet wurde
let movesDisplay: HTMLElement; // reference to moves display / Referenz auf Anzeige der Züge
let timeDisplay: HTMLElement; 
let gameBoard: HTMLElement;

export { Card, initialzeGame, cards, flippedCards, matchedPairs, moves, timer, timerInterval, gameStarted, movesDisplay, restartButton, timeDisplay, gameBoard };

function initialzeGame(): void {
    const emojis = ["🎲", "🎨", "🎭","⚽", "♟️", "🎁", "🏆", "🚀", "🎪","⚓", "🪭", "⚜️" ];
    
     cards = [...emojis, ...emojis].map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
}))
};