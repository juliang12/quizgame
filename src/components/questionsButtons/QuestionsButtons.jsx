import React from "react";
import textEdit from "../../utils/util_textEdit";
import "../../pages/steps/step1/Game.css";
import { handleSelect, resetTime } from "../../pages/steps/handlers";

const QuestionsButtons = ({
  setDuration,
  select,
  setSelect,
  setCurrentStep,
  currentStep,
  setShow,
  timer,
  setTimer,
  option: { question, correct_answer, answers },
}) => {
  const LimitTime = (item) => {
    if (item === correct_answer && timer === 0) {
      return "correct";
    } else if (item !== correct_answer && timer === 0) {
      return "incorrect";
    }
  };

  const handleCheck = (item) => {
    setSelect(item);
    if (item === correct_answer) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        resetTime(setTimer);
        setSelect();
      }, 1000);
    } else {
      setShow(true);
    }
  };

  return (
    <div>
      {answers &&
        answers?.map((item, index) => (
          <button
            disabled={select || timer === 0}
            key={index}
            className={`buttons ${
              select && handleSelect(item, select, correct_answer)
            } ${LimitTime}}`}
            onClick={() => handleCheck(item)}
          >
            {textEdit(item)}
          </button>
        ))}
    </div>
  );
};

export default QuestionsButtons;
