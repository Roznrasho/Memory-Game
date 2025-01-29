import { Card } from "../memoryGameState/MemoryGameState";


export const gameState = {
    moves: 0,
    timer: 0,
    timerInterval: null as NodeJS.Timer | null,
    gameStarted: false,
    flippedCards: [] as Card[],
    matchedPairs: [] as Card[],
  };