import './style.css'

// Get references to DOM elements
const memoryGame = document.getElementById("gameBoard");
const timerElement = document.getElementById("time");
const movesElement = document.getElementById("moves");
const restartButton = document.getElementById("restartButton");

//game state variables
let cards: HTMLElement[] = []; // array to store all cards / Array zum Speichern aller Karten
let flippedCards: HTMLElement[] = []; // array to store flipped cards / Array zum Speichern der umgedrehten Karten
let matchedPairs = 0; // number of matched pairs / Anzahl der übereinstimmenden Paare
let moves = 0; // number of moves / Anzahl der Züge
let timer = 0; // timer in seconds / Timer in Sekunden
let timerInterval: number | undefined; // interval to update timer / Intervall zum Aktualisieren des Timers
let gameStarted = false; // flag to check if game has started / Flagge zur Überprüfung, ob das Spiel gestartet wurde