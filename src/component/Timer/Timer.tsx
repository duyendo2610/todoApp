import React, { useEffect, useState } from 'react'

const formatTimer = (date : Date) => {
    const hours = `0${date.getHours()}`;
    const min = `0${date.getMinutes()}`;
    const second = `0${date.getSeconds()}`;
    let dayAweek: any = date.getDay();
    const day = `0${date.getDate()}`;
    const month = `0${date.getMonth()}`;
    const year = date.getFullYear();
    switch (dayAweek) {
      case 0:
        dayAweek = "sunday";
        break;
      case 1:
        dayAweek = "Monday";
        break;
      case 2:
        dayAweek = "Tuesday";
        break;
      case 3:
        dayAweek = "Wensday";
        break;
      case 4:
        dayAweek = "Thursday";
        break;
      case 5:
        dayAweek = "Friday";
        break;
      case 6:
        dayAweek = "Saturday";
        break;
    }
    return `${hours.slice(-2, 3)}:${min.slice(-2, 3)}:${second.slice(-2,3)} - ${dayAweek}, ${day.slice(-2, 3)}/${month.slice(-2, 3)}/${year}`;
  };
const Timer = () => {
    const [timer, setTimer] = useState("");
  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const timeRender = formatTimer(now);
      setTimer(timeRender);
    }, 1000);
  }, []);
  return (
        <div className='bg-primary bg-gradient py-3 px-2 rounded-2 text-primary-emphasis fs-3 bg-opacity-50' >{timer}</div>
  )
}

export default Timer