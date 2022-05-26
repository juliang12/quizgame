import React from "react";
import { Button } from "../../../components";
import style from "./Finalized.module.css";

const Finalized = ({ score, setCurrentStep, currentStep, setScore }) => {
  const PlayAgain = () => {
    setScore((score = 0));
    setCurrentStep((currentStep = 0));
  };
  return (
    <div className={style.container}>
      <h1>Game Finalized</h1>
      <h3>Your Score is:</h3>
      <h4>{score}</h4>
      <div>
        <Button onClick={PlayAgain}>Play Again</Button>
      </div>
    </div>
  );
};

export default Finalized;