import { restartGame } from "./features/restartgame";
import { renderCards, shuffleCarde } from "./features/shuffleAndRender";
//import { startTimer, timerInterval } from "./features/startTimer";
import "./style.css";


interface Card {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

// Get references to DOM elements
const memoryGame = document.getElementById("gameBoard") as HTMLDivElement;
const timerElement = document.getElementById("time") as HTMLSpanElement;
const movesElement = document.getElementById("moves") as HTMLSpanElement;
const restartButton = document.getElementById("restartButton") as HTMLButtonElement;

//game state variexport {initialzeGame, memoryGame, timerElement, movesElement, restartButton, card, flippedCards, matchedPairs, moves, timer, timerInterval, gameStarted}ables
let card: Card[] = []; // array to store all card / Array zum Speichern aller Karten
//let flippedCards: Card[] = []; // array to store flipped card / Array zum Speichern der umgedrehten Karten
//let matchedPairs: Card[] = []; // array to store matched pairs / Array zum Speichern der passenden Paare
let moves: number = 0; // number of moves / Anzahl der Züge
let timer: number = 0;// timer in seconds / Timer in Sekunden
// let timerInterval: number | null = null; // interval to update timer / Intervall zum Aktualisieren des Timers
let gameStarted: boolean = false; // flag to check if game has started / Flagge zur Überprüfung, ob das Spiel gestartet wurde
//let movesDisplay: HTMLElement; // reference to moves display / Referenz auf Anzeige der Züge
//let timeDisplay: HTMLElement;
//let gameBoard: HTMLElement;

restartButton?.addEventListener("click", restartGame);


function initializeGame(): void {
  const emojis = [
    "🎲",
    "🎨",
    "🎭",
    "⚽",
    "♟️",
    "🎁",
    "🏆",
    "🚀",
    "🎪",
    "⚓",
    "🪭",
    "⚜️",
  ];
  card = [...emojis, ...emojis].map((value, index) => ({
    id: index,
    value,
    isFlipped: false,
    isMatched: false,
  }));
  shuffleCarde(card);
  renderCards(card);
  moves = 0;
  timer = 0;
  gameStarted = false;
  movesElement.textContent = "0";
  timerElement.textContent = "0:00";
}

document.addEventListener('DOMContentLoaded', initializeGame);

export const gameState = {
  moves: 0,
  timer: 0,
  timerInterval: null as NodeJS.Timer | null,
  gameStarted: false,
  flippedCards: [] as Card[],
  matchedPairs: [] as Card[],
};


export {
 initializeGame,
  card,
  restartButton,
  memoryGame,
  timerElement,
  movesElement,
};
export type { Card };
