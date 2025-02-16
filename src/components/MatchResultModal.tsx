import { PlayerChoice, useGameStore } from "@/libs/stores/useGameStore";
import React from "react";
import MatchResult from "./MatchResult";
import Modal from "./Modal";
import MatchHistories from "./MatchHistories";

interface Props {
  setBoard: (board: PlayerChoice[]) => void;
}

const MatchResultModal = (props: Props) => {
  const { setBoard } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const winner = useGameStore((state) => state.winner);
  const resetMatch = useGameStore((state) => state.resetMatch);
  const changeSettings = useGameStore((state) => state.changeSettings);

  React.useEffect(() => {
    if (winner) setIsOpen(true);
  }, [winner]);

  const onPlayAgainClick = () => {
    setBoard(Array(9).fill(null));
    resetMatch();
    setIsOpen(false);
  };

  const onChangeSettingsPress = () => {
    changeSettings();
    setBoard([]);
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <MatchResult winner={winner} />
      <div className="flex items-center justify-center flex-col">
        <MatchHistories />
        <div className="flex flex-row gap-2 items-center justify-center">
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={onPlayAgainClick}
          >
            Play Again
          </button>
          <button
            className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
            onClick={onChangeSettingsPress}
          >
            Change Settings
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default MatchResultModal;
