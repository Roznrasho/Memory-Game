import { shuffleCards, renderCards } from "./shuffleAndRender";
import { movesElement, timerElement } from "../main";

import { gameState } from "../gameStateData/gameState";
import { Card } from "../memoryGameState/MemoryGameState";

let cards: Card[] = [];

function initializeGame(cardCount: number): void {
  const emojis = [
    "🎲",
    "🎨",
    "🎭",
   // "⚽",
   // "♟️",
   // "🎁",
   // "🏆",
   // "🚀",
   // "🎪",
   // "⚓",
   // "🪭",
   // "⚜️",
  ];

  const selectedEmojis = emojis.slice(0, cardCount / 2);
  cards = [...selectedEmojis, ...selectedEmojis].map((value, index) => ({
    id: index,
    value,
    isFlipped: false,
    isMatched: false,
  }));

  shuffleCards(cards);
  renderCards(cards);
  gameState.moves = 0;
  gameState.timer = 0;
  gameState.gameStarted = false;
  movesElement.textContent = "0";
  timerElement.textContent = "0:00";
  const statsElement = document.querySelector(".stats");
  if (statsElement) {
    statsElement.classList.remove("hidden");
  }
}

export { initializeGame, cards };
