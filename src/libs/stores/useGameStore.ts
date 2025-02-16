import { create } from "zustand";

export type PlayerChoice = "X" | "O" | null;
export type GameSection = "playerSelection" | "playing";
export type PlayerTurn = "X" | "O";
export type Winner = "X" | "O" | "NONE" | null;
export type MatchHistory = {
  winner: "X" | "O" | "NONE";
  time: number;
  currentTime: string;
  board: PlayerChoice[];
};

interface GameState {
  gameSection: GameSection;
  playerTurn: PlayerTurn;
  winner: Winner;
  matchHistories: MatchHistory[];
  elapsedTime: number;
  setGameSection: (section: GameSection) => void;
  setPlayerTurn: (turn: PlayerTurn) => void;
  setWinner: (winner: Winner) => void;
  resetMatch: () => void;
  changeSettings: () => void;
  setMatchHistories: (value: MatchHistory) => void;
  setElapsedTime: (value: number) => void;
}

export const useGameStore = create<GameState>((set) => ({
  gameSection: "playerSelection",
  playerTurn: "X",
  winner: null,
  matchHistories: [],
  elapsedTime: 0,
  setGameSection: (section) => set({ gameSection: section }),
  setPlayerTurn: (turn) => set({ playerTurn: turn }),
  setWinner: (winner) => set({ winner }),
  setMatchHistories: (value) =>
    set((state) => ({ matchHistories: [...state.matchHistories, value] })),
  setElapsedTime: (time) => set({ elapsedTime: time }),
  resetMatch: () =>
    set({
      winner: null,
      playerTurn: "X",
    }),
  changeSettings: () =>
    set({
      winner: null,
      gameSection: "playerSelection",
    }),
}));
