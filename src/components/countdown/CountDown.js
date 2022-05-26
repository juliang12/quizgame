import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const CountDown = ({setTimer, stop, timer}) => {
  console.log(timer)
    const renderTime = ({ remainingTime }) => {
    return <div className="timer">{remainingTime}</div>;
  };
  return (
    <div className="counter-circle">
    <CountdownCircleTimer
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