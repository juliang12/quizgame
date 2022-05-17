import React from "react";
import { handleCheck, handleSelect } from "../../pages/steps/handlers";
import textEdit from "../../utils/util_textEdit";

const QuestionsButtons = ({
  index,
  select,
  item,
  setSelect,
  setCurrentStep,
  currentStep,
  setShow,
  setStop,
  correct,
  setScore,
  score,
  timer,
}) => {
  const LimitTime = () => {
    if (item === correct && timer === 0) {
      return "correct";
    } else if (item !== correct && timer === 0) {
      return "incorrect";
    }
  };

  return (
    <div>
      <button
        disabled={select || timer === 0}
        key={index}
        className={`buttons ${LimitTime()} ${
          select && handleSelect(item, select, correct, timer)
        }`}
        onClick={(e) =>
          handleCheck(
            item,
            setSelect,
            setCurrentStep,
            currentStep,
            setShow,
            setStop,
            correct,
            select,
            setScore,
            score
          )
        }
      >
        {textEdit(item)}
      </button>
    </div>
  );
};

export default QuestionsButtons;
