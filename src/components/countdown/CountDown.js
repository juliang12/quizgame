import React, { useContext } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import QuizContext from '../../context/QuizContext';

const CountDown = ({setCompleted}) => {
  const {stop, currentStep} = useContext(QuizContext);

    const renderTime = ({ remainingTime }) => {
    return <div className="timer">{remainingTime}</div>;
  };
  
  return (
    <div className="counter-circle">
    <CountdownCircleTimer
      key={currentStep}
      isPlaying={stop}
      duration={10}
      colors={["#303031"]}
      size={60}
      onComplete={()=>setCompleted(true)}
      strokeWidth={6}>
     {renderTime}
    </CountdownCircleTimer>
  </div>
  )
}

export default CountDown