import { restartGame } from "./featurs/restartgame.ts";
import { renderCards, shuffleCarde } from "./featurs/shuffleAndRender.ts";
import "./style.css";

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

//game state variexport {initialzeGame, memoryGame, timerElement, movesElement, restartButton, cards, flippedCards, matchedPairs, moves, timer, timerInterval, gameStarted}ables
let cards: Card[] = []; // array to store all cards / Array zum Speichern aller Karten
let flippedCards: Card[] = []; // array to store flipped cards / Array zum Speichern der umgedrehten Karten
let matchedPairs: Card[] = []; // array to store matched pairs / Array zum Speichern der passenden Paare
let moves: number = 0; // number of moves / Anzahl der Züge
let timer: number = 0; // timer in seconds / Timer in Sekunden
let startTimer: number | null; // interval to update timer / Intervall zum Aktualisieren des Timers
let gameStarted: boolean = false; // flag to check if game has started / Flagge zur Überprüfung, ob das Spiel gestartet wurde
let movesDisplay: HTMLElement; // reference to moves display / Referenz auf Anzeige der Züge
let timeDisplay: HTMLElement;
let gameBoard: HTMLElement;

restartButton?.addEventListener("click", () => restartGame());
initialzeGame();

function initialzeGame(): void {
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
  cards = [...emojis, ...emojis].map((value, index) => ({
    id: index,
    value,
    isFlipped: false,
    isMatched: false,
  }));
  shuffleCarde(cards);
  renderCards(cards);
}
export {
  initialzeGame,
  cards,
  flippedCards,
  matchedPairs,
  moves,
  timer,
  startTimer,
  gameStarted,
  movesDisplay,
  restartButton,
  timeDisplay,
  gameBoard,
};
export type { Card };
