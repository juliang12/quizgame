import React, { useContext } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import QuizContext from '../../context/QuizContext';

const CountDown = ({setTimer,timer, key}) => {
  const {stop} = useContext(QuizContext);

    const renderTime = ({ remainingTime }) => {
      setTimer(remainingTime)
    return <div className="timer">{remainingTime}</div>;
  };
  return (
    <div className="counter-circle">
    <CountdownCircleTimer
      key={key}
      isPlaying={stop}
      duration={10}
      colors={["#303031"]}
      size={60}
      strokeWidth={6}>
     {renderTime}
    </CountdownCircleTimer>
  </div>
  )
}

export default CountDown