import React, { useContext } from "react";
import QuizContext from "../../context/QuizContext";
import { nextQuestion } from "../../pages/steps/handlers";
import Button from "../button/Button";

const NextQuestion = ({ setCurrentStep, currentStep, setShow, setKey }) => {
  const { setSelect } = useContext(QuizContext);

  return (
    <div>
      <Button
        onClick={() =>
          nextQuestion(setCurrentStep, currentStep, setSelect, setKey, setShow)
        }
        className="nextButton"
      >
        Next Question
      </Button>
    </div>
  );
};

export default NextQuestion;
