import React from "react";
import Button from "../../../components/button/Button";
import style from "./Finally.module.css";

const Finally = ({ score, setCurrentStep, currentStep, setScore }) => {
  const PlayAgain = () => {
    setScore((score = 0));
    setCurrentStep((currentStep = 0));
  };
  return (
    <div className={style.container}>
      <h1>Game Finally</h1>
      <h3>Your Score is:</h3>
      <h4>{score}</h4>
      <div>
        <Button onClick={PlayAgain}>Play Again</Button>
      </div>
    </div>
  );
};

export default Finally;
