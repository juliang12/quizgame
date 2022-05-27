import React, { useContext } from "react";
import Button from "../../../components/button/Button";
import QuizContext from "../../../context/QuizContext";
import style from "./Finalized.module.css";

const Finalized = () => {
  const { score, setScore, setCurrentStep } = useContext(QuizContext);

  const PlayAgain = () => {
    setScore(0);
    setCurrentStep(0);
  };

  return (
    <div className={style.container}>
      <h1>Game Finalized</h1>
      <h3>Your Score is:</h3>
      <h4>{score}</h4>
      <div>
        <Button onClick={() => PlayAgain()}>Play Again</Button>
      </div>
    </div>
  );
};

export default Finalized;
