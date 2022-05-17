import React, { useState } from "react";
import Loser from "../../pages/loser/Loser";
import Finally from "../../pages/steps/Finally/Finally";
import Game from "../../pages/steps/step1/Game";

const Play = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [timer, setTimer] = useState(10);
  const [stop, setStop] = useState(true);
  const [select, setSelect] = useState();
  const [show, setShow] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="game-container">
      {currentStep === "loser" && <Loser />}
      {currentStep === 0 && (
        <Game
          score={score}
          setScore={setScore}
          setShow={setShow}
          timer={timer}
          setTimer={setTimer}
          show={show}
          setCurrentStep={setCurrentStep}
          setSelect={setSelect}
          select={select}
          currentStep={currentStep}
          setStop={setStop}
          stop={stop}
        />
      )}

      {currentStep === 1 && (
        <Game
          score={score}
          setScore={setScore}
          setShow={setShow}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          show={show}
          timer={timer}
          setTimer={setTimer}
          setSelect={setSelect}
          select={select}
          setStop={setStop}
          stop={stop}
        />
      )}
      {currentStep === 2 && (
        <Game
          score={score}
          setScore={setScore}
          setShow={setShow}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          show={show}
          timer={timer}
          setTimer={setTimer}
          setSelect={setSelect}
          select={select}
          setStop={setStop}
          stop={stop}
        />
      )}
      {currentStep === 3 && (
        <Game
          score={score}
          setScore={setScore}
          setShow={setShow}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          show={show}
          timer={timer}
          setTimer={setTimer}
          setSelect={setSelect}
          select={select}
          setStop={setStop}
          stop={stop}
        />
      )}
      {currentStep === 4 && (
        <Finally
          score={score}
          setScore={setScore}
          setShow={setShow}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          show={show}
          timer={timer}
          setTimer={setTimer}
          setSelect={setSelect}
          select={select}
          setStop={setStop}
          stop={stop}
        />
      )}
    </div>
  );
};

export default Play;
