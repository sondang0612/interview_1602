import { useGameStore } from "@/libs/stores/useGameStore";
import React from "react";

const MatchHistories = () => {
  const matchHistories = useGameStore((state) => state.matchHistories);

  const infos = React.useMemo(() => {
    return {
      x: matchHistories?.filter((item) => item.winner === "X").length,
      o: matchHistories?.filter((item) => item.winner === "O").length,
      draw: matchHistories?.filter((item) => item.winner === "NONE").length,
    };
  }, [matchHistories]);

  return (
    <div>
      <div className="text-base font-medium text-o-color">
        The total win of O: {infos?.o}
      </div>
      <div className="text-base font-medium text-x-color">
        The total win of X: {infos?.x}
      </div>
      <div className="text-base font-medium text-yellow-600">
        The total draws : {infos.draw}
      </div>
    </div>
  );
};

export default MatchHistories;
