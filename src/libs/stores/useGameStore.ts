import { create } from "zustand";

export type PlayerChoice = "X" | "O" | null;
export type GameSection = "playerSelection" | "playing";
export type PlayerTurn = "X" | "O";
export type Winner = "X" | "O" | "NONE" | null;
export type MatchHistory = {
  winner: "X" | "O" | "NONE";
  time: number;
  currentTime: string;
  playerChoice: PlayerChoice;
  board: PlayerChoice[];
};

interface GameState {
  playerChoice: PlayerChoice;
  gameSection: GameSection;
  playerTurn: PlayerTurn;
  winner: Winner;
  matchHistory: MatchHistory[];
  elapsedTime: number;
  setPlayerChoice: (choice: PlayerChoice) => void;
  setGameSection: (section: GameSection) => void;
  setPlayerTurn: (turn: PlayerTurn) => void;
  setWinner: (winner: Winner) => void;
  resetMatch: () => void;
  changeSettings: () => void;
  setMatchHistory: (value: MatchHistory) => void;
  setElapsedTime: (value: number) => void;
}

export const useGameStore = create<GameState>((set) => ({
  playerChoice: null,
  gameSection: "playerSelection",
  playerTurn: "X",
  winner: null,
  matchHistory: [],
  elapsedTime: 0,
  setPlayerChoice: (choice) => set({ playerChoice: choice }),
  setGameSection: (section) => set({ gameSection: section }),
  setPlayerTurn: (turn) => set({ playerTurn: turn }),
  setWinner: (winner) => set({ winner }),
  setMatchHistory: (value) =>
    set((state) => ({ matchHistory: [...state.matchHistory, value] })),
  setElapsedTime: (time) => set({ elapsedTime: time }),
  resetMatch: () =>
    set({
      winner: null,
      playerTurn: "X",
    }),
  changeSettings: () =>
    set({
      winner: null,
      playerTurn: "X",
      gameSection: "playerSelection",
    }),
}));
