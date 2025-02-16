import { Winner } from "@/libs/stores/useGameStore";

type Props = {
  winner: Winner;
};

const MatchResult = (props: Props) => {
  const { winner } = props;

  if (!winner) return null;

  return winner === "X" || winner === "O" ? (
    <div className="text-2xl text-center font-bold text-o-color mb-4">
      🎉 Winner:{" "}
      <span className={`${winner === "X" ? "text-x-color" : "text-o-color"}`}>
        {winner}
      </span>
    </div>
  ) : (
    <div className="text-2xl text-center font-bold text-yellow-600 mb-4">
      🤝 The match is a draw!
    </div>
  );
};

export default MatchResult;
