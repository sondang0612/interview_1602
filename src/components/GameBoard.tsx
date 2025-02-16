import { PlayerChoice, useGameStore } from "@/libs/stores/useGameStore";
import React from "react";
import Icon from "./Icon";
import MatchResultModal from "./MatchResultModal";

const borderBottomRight = [0, 1, 3, 4];
const borderBottom = [2, 5];
const borderRight = [6, 7];

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const GameBoard = () => {
  const playerTurn = useGameStore((state) => state.playerTurn);
  const winner = useGameStore((state) => state.winner);
  const elapsedTime = useGameStore((state) => state.elapsedTime);
  const setPlayerTurn = useGameStore((state) => state.setPlayerTurn);
  const setWinner = useGameStore((state) => state.setWinner);
  const setMatchHistories = useGameStore((state) => state.setMatchHistories);

  const [board, setBoard] = React.useState<PlayerChoice[]>(Array(9).fill(null));

  const checkWinner = (newBoard: PlayerChoice[]) => {
    for (const [a, b, c] of winningCombinations) {
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }
    return null;
  };

  const handleCellClick = (index: number) => {
    if (board[index] || playerTurn === null || winner) return;

    const newBoard = [...board];
    newBoard[index] = playerTurn;
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (!gameWinner && newBoard.includes(null)) {
      setPlayerTurn(playerTurn === "X" ? "O" : "X");
      return undefined;
    }
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (!newBoard.includes(null)) {
      setWinner("NONE");
    }

    setMatchHistories({
      currentTime: new Date().toLocaleString(),
      time: elapsedTime,
      winner: gameWinner ? gameWinner : "NONE",
      board: board,
    });
  };

  const renderCell = React.useCallback((cell: PlayerChoice) => {
    switch (cell) {
      case "X":
        return <Icon name="X" className="size-full" />;
      case "O":
        return <Icon name="O" className="size-full" />;
      default:
        return <div className="size-full" />;
    }
  }, []);

  return (
    <div className="flex flex-col items-center mt-11">
      <div className="grid grid-cols-3 bg-white p-4 rounded-lg shadow-lg">
        {board.map((cell, index) => (
          <div
            key={index}
            className={`size-20 p-2 flex items-center justify-center font-bold cursor-pointer hover:bg-gray-100 transition-all ${
              borderBottomRight.includes(index) &&
              "border-b border-b-gray-500 border-r border-r-gray-500"
            } ${borderBottom.includes(index) && "border-b border-b-gray-500"} ${
              borderRight.includes(index) && "border-r border-r-gray-500"
            }`}
            onClick={() => handleCellClick(index)}
          >
            {renderCell(cell)}
          </div>
        ))}
      </div>

      <MatchResultModal setBoard={setBoard} />
    </div>
  );
};

export default GameBoard;
