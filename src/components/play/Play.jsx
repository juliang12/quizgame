import { useContext } from "react";
import QuizContext from "../../context/QuizContext";
import Finalized from "../../pages/steps/finalized/Finalized";
import Game from "../../pages/steps/game/Game";

const Play = () => {
  const { currentStep } = useContext(QuizContext);
  return (
    <div className="game-container">
      {currentStep !== 4 ? <Game /> : <Finalized />}
    </div>
  );
};

export default Play;
