import React, { useContext, useEffect, useState } from "react";
import { createUserAdapter } from "../../../adapters";
import { getApi } from "../../../services/public.services";
import { useFetch } from "../../../hooks/useFetch";
import textEdit from "../../../utils/util_textEdit";
import "./Game.css";
import QuizContext from "../../../context/QuizContext";
import { CountDown, NextQuestion, QuestionsButtons } from "../../../components";

const Game = () => {
  const {currentStep, setCurrentStep} = useContext(QuizContext);
  const { loader, fetchData } = useFetch();
  const [key, setKey] = useState(0);
  const [state, setState] = useState([]);
  const [timer, setTimer] = useState(10);
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
      key={key}
      setTimer={setTimer}
      timer={timer}
      />
      {data &&(
      <div className="options">
          <QuestionsButtons
          setKey={setKey}
          option={data[currentStep]}
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            setShow={setShow}
             correct={data && data[currentStep]?.correct_answer}
            timer={timer}
            setTimer={setTimer}
          />
      </div>)}
      { show && (
        <NextQuestion
        option={data[currentStep]}
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
        setTimer={setTimer}
        setKey={setKey}
        setShow={setShow}
        />
      )}
      {timer === 0 && (
        <>
          <h2 className="lose">You lost because you didn't respond on time</h2>
          <NextQuestion
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          option={data[currentStep]}
          setTimer={setTimer}
          setShow={setShow}
          setKey={setKey}
          />
        </>
      )}
    </div>
  );
};

export default Game;
