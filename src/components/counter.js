import React, { useState, useEffect } from "react";
import "../App.css";
import { Timer } from "@mui/icons-material";

const COUNTDOWN_TARGET = new Date("2030-03-31T23:59:59");
const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24)); //1sec=1000 miliseconds and 1min=60 sec and 1hr=60 min and 1day=24hrs
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24); //declaring remaining %24
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const time = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => {
      clearInterval(Timer);
    };
  }, []);

  return (
    <div className="countdown">
      <div className="content">
        {Object.entries(timeLeft).map((el) => {
          const label = el[0];
          const value = el[1];
          return (
            <div className="box" key={label}>
              <div className="value">
                <span>{value}</span>
              </div>
              <span className="label">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countdown;
