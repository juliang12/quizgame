import React from "react";
import { nextQuestion, resetTime } from "../../pages/steps/handlers";
import Button from "../button/Button";

const NextQuestion = ({
  duration,
  setDuration,
  show,
  setCurrentStep,
  currentStep,
  setStop,
  setSelect,
  setShow,
  timer,
  setTimer,
}) => {
  return (
    <div>
      <Button
        onClick={(e) =>
          nextQuestion(
            setCurrentStep,
            currentStep,
            setSelect,
            setShow,
            resetTime,
            setTimer
          )
        }
        className="nextButton"
      >
        Next Question
      </Button>
    </div>
  );
};

export default NextQuestion;
