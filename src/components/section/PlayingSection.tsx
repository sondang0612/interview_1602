import GameBoard from "../GameBoard";
import PlayingTurn from "../PlayingTurn";
import Timer from "../Timer";

const PlayingSection = () => {
  return (
    <div className="w-full h-full items-center justify-center flex flex-col">
      <Timer />
      <PlayingTurn />
      <GameBoard />
    </div>
  );
};

export default PlayingSection;
