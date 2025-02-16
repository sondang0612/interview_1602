import { useGameStore } from "@/libs/stores/useGameStore";
import React from "react";
const Timer = () => {
  const [seconds, setSeconds] = React.useState(0);
  const winner = useGameStore((state) => state.winner);
  const setElapsedTime = useGameStore((state) => state.setElapsedTime);

  React.useEffect(() => {
    if (winner) {
      setElapsedTime(seconds);
      setSeconds(0);
      return;
    }
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [winner, seconds, setElapsedTime]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const secs = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="bg-white text-black w-[6rem] flex items-center justify-center py-2 rounded-full text-[2.125] font-medium mb-[1.5625rem]">
      {formatTime(seconds)}
    </div>
  );
};

export default Timer;
