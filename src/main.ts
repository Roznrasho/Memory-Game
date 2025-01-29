import { restartGame } from "./features/restartgame";
import "./style.css";
import { initializeGame } from "./features/initializeGame";



// Get references to DOM elements
const memoryGame = document.getElementById("gameBoard") as HTMLDivElement;
const timerElement = document.getElementById("time") as HTMLSpanElement;
const movesElement = document.getElementById("moves") as HTMLSpanElement;
const restartButton = document.getElementById(
  "restartButton"
) as HTMLButtonElement;

//game state variexport {initialzeGame, memoryGame, timerElement, movesElement, restartButton, card, flippedCards, matchedPairs, moves, timer, timerInterval, gameStarted}ables
// let card: Card[] = []; // array to store all card / Array zum Speichern aller Karten


//Eventlister for restart button
restartButton?.addEventListener("click", restartGame);


const start12Button = document.getElementById("start-12") as HTMLButtonElement;
const start24Button = document.getElementById("start-24") as HTMLButtonElement;

start12Button.addEventListener("click", () => {
  initializeGame(12); // Spiel mit 12 Karten starten
});

start24Button.addEventListener("click", () => {
  initializeGame(24); // Spiel mit 24 Karten starten
});

//Eventlistener for DOMContentLoaded
// document.addEventListener("DOMContentLoaded", initializeGame);

export { restartButton, memoryGame, timerElement, movesElement };

