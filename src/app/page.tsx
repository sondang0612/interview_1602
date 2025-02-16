"use client";
import PlayerSection from "@/components/section/PlayerSection";
import PlayingSection from "@/components/section/PlayingSection";
import { useGameStore } from "@/libs/stores/useGameStore";
import React from "react";

const Page = () => {
  const gameSection = useGameStore((state) => state.gameSection);

  const renderGameSection = React.useCallback(() => {
    switch (gameSection) {
      case "playerSelection":
        return <PlayerSection />;
      case "playing":
        return <PlayingSection />;
      default:
        return null;
    }
  }, [gameSection]);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-blue-200">
      <div className="bg-primary w-[23.5rem] h-[41.75rem] rounded-lg">
        {renderGameSection()}
      </div>
    </div>
  );
};

export default Page;
