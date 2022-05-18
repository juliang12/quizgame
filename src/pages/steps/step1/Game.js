import React, { useEffect, useState } from "react";
import { createUserAdapter } from "../../../adapters";
import QuestionsButtons from "../../../components/questionsButtons/QuestionsButtons";
import CountDown from "../../../components/countdown/CountDown";
import NextQuestion from "../../../components/nextQuestion/NextQuestion";
import { getApi } from "../../../services/public.services";
import { useFetch } from "../../../hooks/useFetch";
import handleSuffle from "../../../utils/util_random";
import textEdit from "../../../utils/util_textEdit";
import "./Game.css";

const Game = ({
  setCurrentStep,
  setStop,
  currentStep,
  stop,
  setSelect,
  select,
  show,
  setShow,
  setTimer,
  timer,
  score,
  setScore,
}) => {
  const { loader, fetchData } = useFetch();
  const [state, setState] = useState([]);
  const [option, setOption] = useState([]);
  const { data } = state;

  const api = async () => {
    const db = await fetchData(getApi());
    setState(createUserAdapter(db));
  };

  useEffect(() => {
    api();
  }, []);

  useEffect(() => {
  
      setOption( 
       data &&
       handleSuffle([data[currentStep]?.correct_answer,
        ...data[currentStep]?.incorrect_answers,
       ]));
  }, [data]);


  return (
    <div className="content">
      <h1 className="title_1">{data && textEdit(data[currentStep]?.question)}</h1>
      <CountDown
        setTimer={setTimer}
        stop={stop}
      />
      <div className="options">
        {option?.map((item, index) => (
          <QuestionsButtons
            index={index}
            select={select}
            item={item}
            setSelect={setSelect}
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            setShow={setShow}
            setStop={setStop}
            correct={data[currentStep]?.correct_answer}
            setScore={setScore}
            score={score}
            timer={timer}
          />
        ))}
      </div>

      { show && (
        <NextQuestion
          show={show}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          setStop={setStop}
          setSelect={setSelect}
          setShow={setShow}
        />
      )}
      {timer === 0 && (
        <>
          <h2 className="lose">You lost because you didn't respond on time</h2>
          <NextQuestion
          show={show}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          setStop={setStop}
          setSelect={setSelect}
          setShow={setShow}
          timer={timer}
          />
        </>
      )}
    </div>
  );
};

export default Game;
