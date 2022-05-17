import React from "react";
import { nextQuestion } from "../../pages/steps/handlers";
import Button from "../button/Button";

const NextQuestion = ({
  show,
  setCurrentStep,
  currentStep,
  setStop,
  setSelect,
  setShow,
  timer,
}) => {
  return (
    <div>
      <Button
        onClick={(e) =>
          nextQuestion(
            show,
            setCurrentStep,
            currentStep,
            setStop,
            setSelect,
            setShow,
            timer
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
