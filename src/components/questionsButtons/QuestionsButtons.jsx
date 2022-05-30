import React, { useContext } from "react";
import textEdit from "../../utils/util_textEdit";
import "../../pages/steps/game/Game.css";
import { handleScore, handleSelect } from "../../pages/steps/handlers";
import QuizContext from "../../context/QuizContext";

const QuestionsButtons = ({
  completed,
  option: { correct_answer, answers },
}) => {
  const { select, setSelect, setStop, setScore, setCurrentStep } =
    useContext(QuizContext);

  const LimitTime = (item) => {
    if (item === correct_answer && completed) {
      return "correct";
    } else if (item !== correct_answer && completed) {
      return "incorrect";
    }
  };

  const handleCheck = (item) => {
    setSelect(item);
    setStop(false);
    setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
      handleScore(item, correct_answer, setScore);
    }, 1000);
  };

  return (
    <div>
      {answers &&
        answers?.map((item, index) => (
          <button
            disabled={select || completed}
            key={index}
            className={`buttons ${
              select && handleSelect(item, select, correct_answer)
            } ${LimitTime(item)}`}
            onClick={() => handleCheck(item)}
          >
            {textEdit(item)}
          </button>
        ))}
    </div>
  );
};

export default QuestionsButtons;
