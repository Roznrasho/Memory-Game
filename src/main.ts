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

//Eventlistener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", initializeGame);

export { restartButton, memoryGame, timerElement, movesElement };

