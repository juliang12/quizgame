import React, { useContext, useEffect, useState } from "react";
import { createUserAdapter } from "../../../adapters";
import { getApi } from "../../../services/public.services";
import { useFetch } from "../../../hooks/useFetch";
import textEdit from "../../../utils/util_textEdit";
import "./Game.css";
import QuizContext from "../../../context/QuizContext";
import { CountDown, QuestionsButtons, Loader } from "../../../components";
import { resetStates } from "../handlers";

const Game = () => {
  const { currentStep, setCurrentStep, setSelect, setStop } =
    useContext(QuizContext);
  const { fetchData } = useFetch();
  const [questionsData, setQuestionsData] = useState([]);
  const [completed, setCompleted] = useState(false);
  const { data } = questionsData;

  const api = async () => {
    const db = await fetchData(getApi());
    setQuestionsData(createUserAdapter(db.data));
  };

  useEffect(() => {
    api();
  }, []);

  useEffect(() => {
    resetStates(setSelect, setStop, setCompleted);
  }, [currentStep]);

  useEffect(() => {
    if (completed) {
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 1000);
    }
  }, [completed]);

  return (
    <div className="content">
      <h1 className="title_1">
        {data && textEdit(data[currentStep]?.question)}
      </h1>
      <div>
        {data ? (
          <CountDown setCompleted={setCompleted} />
        ) : (
          <div>
            <Loader />
          </div>
        )}
      </div>
      {data && (
        <div className="options">
          <QuestionsButtons
            option={data[currentStep]}
            setCurrentStep={setCurrentStep}
            setCompleted={setCompleted}
            completed={completed}
            correct={data && data[currentStep]?.correct_answer}
          />
        </div>
      )}
      <div>
        {completed && (
          <h2 className="lose">You lost because you didn't respond on time</h2>
        )}
      </div>
    </div>
  );
};

export default Game;
