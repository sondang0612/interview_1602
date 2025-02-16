import { useGameStore } from "@/libs/stores/useGameStore";
import React from "react";

const PlayingTurn = () => {
  const playerTurn = useGameStore((state) => state.playerTurn);
  const winner = useGameStore((state) => state.winner);

  const whoIAm = React.useMemo(() => {
    if (winner) return "Oop!!!";
    return `${playerTurn}'s Turn`;
  }, [playerTurn, winner]);

  return (
    <p className="font-bold text-[2.25rem] text-white text-center">{`${whoIAm}`}</p>
  );
};

export default PlayingTurn;
