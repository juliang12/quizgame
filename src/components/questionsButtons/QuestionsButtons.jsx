import React, { useContext } from "react";
import textEdit from "../../utils/util_textEdit";
import "../../pages/steps/game/Game.css";
import { handleSelect, resetTimer } from "../../pages/steps/handlers";
import QuizContext from "../../context/QuizContext";

const QuestionsButtons = ({
  setShow,
  timer,
  setKey,
  option: { correct_answer, answers },
}) => {
  const { select, setSelect, setStop, setScore, score, setCurrentStep } =
    useContext(QuizContext);

  const LimitTime = (item) => {
    if (item === correct_answer && timer === 0) {
      return "correct";
    } else if (item !== correct_answer && timer === 0) {
      return "incorrect";
    }
  };

  const handleScore = (item) => {
    if (item === correct_answer) {
      setScore(score + 3);
    } else {
      setScore(score - 1);
    }
  };

  const handleCheck = (item) => {
    setSelect(item);
    setStop(true);
    handleScore(item);
    if (item === correct_answer) {
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        setSelect(null);
        resetTimer(setKey);
      }, 1000);
    } else {
      setStop(false);
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
