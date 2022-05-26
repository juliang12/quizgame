import React, { useEffect, useState } from "react";
import { createUserAdapter } from "../../../adapters";
import QuestionsButtons from "../../../components/questionsButtons/QuestionsButtons";
import CountDown from "../../../components/countdown/CountDown";
import { getApi } from "../../../services/public.services";
import { useFetch } from "../../../hooks/useFetch";
import textEdit from "../../../utils/util_textEdit";
import "./Game.css";
import Finalized from "../Finally/Finalized";
import { NextQuestion } from "../../../components";

const Game = ({
  setStop,
  stop,
  score,
  setScore,
  select,
  setSelect
}) => {
  const { loader, fetchData } = useFetch();
  const [currentStep, setCurrentStep] = useState(0);
  const [state, setState] = useState([]);
  const [timer, setTimer] = useState(10);
  const [duration, setDuration] = useState(10);
  const [show, setShow] = useState(false);
  const { data } = state;

  const api = async () => {
    const db = await fetchData(getApi());
    setState(createUserAdapter(db.data));
  };


  useEffect(() => {
    api();
  }, []);



  return (
    <div className="content">
      <h1 className="title_1">{data && textEdit(data[currentStep]?.question)}</h1>
      <CountDown
      setTimer={setTimer}
      timer={timer}
        stop={stop}
      />
      {data &&(
      <div className="options">
          <QuestionsButtons
          setDuration={setDuration}
          option={data[currentStep]}
            select={select}
            setSelect={setSelect}
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            setShow={setShow}
            setStop={setStop}
             correct={data && data[currentStep]?.correct_answer}
            setScore={setScore}
            score={score}
            timer={timer}
            setTimer={setTimer}
          />
      </div>)}
      { show && (
        <NextQuestion
        duration={duration}
        setDuration={setDuration}
        option={data[currentStep]}
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
        setSelect={setSelect}
        setTimer={setTimer}
        />
      )}
      {timer === 0 && (
        <>
          <h2 className="lose">You lost because you didn't respond on time</h2>
          <NextQuestion
          />
        </>
      )}
      {data?.length > 4 &&(
      <Finalized
        score={score}
        setScore={setScore}
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
        setSelect={setSelect}
        select={select}
        setStop={setStop}
        stop={stop}
      />)}
    </div>
  );
};

export default Game;
