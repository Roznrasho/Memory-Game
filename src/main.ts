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
export const gameState = {
  moves: 0,
  timer: 0,
  timerInterval: null as NodeJS.Timer | null,
  gameStarted: false,
  flippedCards: [] as Card[],
  matchedPairs: [] as Card[],
};


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
  gameState.moves = 0;
  gameState.timer = 0;
  gameState.gameStarted = false;
  movesElement.textContent = "0";
  timerElement.textContent = "0:00";
}

document.addEventListener('DOMContentLoaded', initializeGame);




export {
 initializeGame,
  card,
  restartButton,
  memoryGame,
  timerElement,
  movesElement,
};
export type { Card };
