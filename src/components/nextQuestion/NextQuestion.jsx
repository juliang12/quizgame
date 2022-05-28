import React, { useContext } from "react";
import QuizContext from "../../context/QuizContext";
import { nextQuestion } from "../../pages/steps/handlers";
import Button from "../../components/button/Button";

const NextQuestion = ({ setCurrentStep, currentStep, setShow, setKey }) => {
  const { setSelect, setStop } = useContext(QuizContext);

  return (
    <div>
      <Button
        onClick={() =>
          nextQuestion(setCurrentStep, setSelect, setKey, setShow, setStop)
        }
        className="nextButton"
      >
        Next Question
      </Button>
    </div>
  );
};

export default NextQuestion;
