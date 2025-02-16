"use client";

import Icon from "@/components/Icon";
import React from "react";
import { motion } from "framer-motion";
import { useGameStore } from "@/libs/stores/useGameStore";

const PlayerSection = () => {
  const playerTurn = useGameStore((state) => state.playerTurn);
  const setPlayerTurn = useGameStore((state) => state.setPlayerTurn);
  const setGameSection = useGameStore((state) => state.setGameSection);

  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center">
      <Icon
        name="X-stroke"
        className="size-[21.125rem] -left-[2.25rem] top-[5.25rem] absolute"
      />
      <Icon
        name="O-stroke"
        className="size-[21.125rem] -right-[5.25rem] top-0 absolute z-0"
      />
      <p className="font-bold text-[2.625rem] text-white z-10">TIC-TAC-TOE</p>
      {playerTurn !== null && (
        <div className="start-now" onClick={() => setGameSection("playing")}>
          Start Now
        </div>
      )}
      <div className="absolute bottom-[2.625rem] w-full">
        <p className="font-medium text-2xl text-white text-center">
          Pick who goes first?
        </p>
        <div className="flex flex-row gap-[1.5625rem] mt-4 w-full px-8">
          <motion.div
            className={`player-button ${
              playerTurn === "X" ? "border-4 border-red-500" : ""
            }`}
            animate={playerTurn === "X" ? { scale: 1.2 } : {}}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setPlayerTurn("X")}
          >
            <Icon name="X" className="size-full" />
          </motion.div>
          <motion.div
            className={`player-button ${
              playerTurn === "O" ? "border-4 border-red-500" : ""
            }`}
            animate={playerTurn === "O" ? { scale: 1.2 } : {}}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setPlayerTurn("O")}
          >
            <Icon name="O" className="size-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSection;
