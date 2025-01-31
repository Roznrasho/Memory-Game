import { shuffleCarde, renderCards } from "./shuffleAndRender";
import {  movesElement, timerElement } from "../main";

import { gameState } from "../gameStateData/gameState";
import { Card } from "../memoryGameState/MemoryGameState";

let card: Card[] = [];

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

export { initializeGame, card };
