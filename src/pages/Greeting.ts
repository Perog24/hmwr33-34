import React, { useState, useEffect } from "react";

import '../scss/Greeting.css.scss'

const Greeting = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // const [isRunTimer, setRuningTimer] = useState(true);
  const [isStop, setStop] = useState(true);

  useEffect(() => {
   const savedTime = localStorage.getItem("savedTime");
    if (savedTime) {
      setTime(JSON.parse(savedTime));
    }

    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if(!isStop){
          return prevTime
        }

        let seconds= prevTime.seconds + 1;
        let minutes = prevTime.minutes;
        let hours = prevTime.hours;

        if (seconds === 60) {
          seconds = 0;
          minutes++;
        }
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
        
        const newTime = { hours, minutes, seconds };
        localStorage.setItem("savedTime", JSON.stringify(newTime));
        return newTime;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isStop]);

  const resetTimer = () => {
    setTime({
      hours: 0,
      minutes: 0,
      seconds: 0
    })    
  }
  
  const timerStop = () => {
    setStop((prevState)=>!prevState ) ;

  }

  return React.createElement("div", {className:'greetWrapper'},
    React.createElement('h3', {className:'greetTitle'}, 'Greeting on our site'),
    React.createElement('h4', null, 
    "Time on page: ", 
    React.createElement('h5', null,`${time.hours < 10 ? '0' + time.hours : time.hours}:${time.minutes <10 ? "0"+time.minutes : time.minutes}:${time.seconds < 10 ? "0"+time.seconds : time.seconds}`)),
    React.createElement('button',{onClick: resetTimer, className:"greetBTN"},"Reset"),
    React.createElement('button',{onClick: timerStop, className:"greetBTN"} ,`${!isStop ? 'Start':'Stop'}`),
    );
};
export default Greeting;
