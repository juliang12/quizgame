import React, { useState } from "react";
import Game from "../../pages/steps/step1/Game";

const Play = () => {
  const [stop, setStop] = useState(true);
  const [score, setScore] = useState(0);
  const [select, setSelect] = useState();
  return (
    <div className="game-container">
      <Game
        setSelect={setSelect}
        select={select}
        score={score}
        setScore={setScore}
        setStop={setStop}
        stop={stop}
      />

      {/* {currentStep === 1 && (
        <Game
          score={score}
          setScore={setScore}
          setShow={setShow}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          show={show}
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
          setSelect={setSelect}
          select={select}
          setStop={setStop}
          stop={stop}
        />
      )} */}
    </div>
  );
};

export default Play;
