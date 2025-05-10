"use client";

import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [minutes, setMinutes] = useState(49);
  const [seconds, setSeconds] = useState(55);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(interval);
      }

      // Add pulsing effect when timer hits certain thresholds
      if ((minutes === 0 && seconds <= 30) ||
          (minutes <= 5 && seconds === 0)) {
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 1000);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  const timerClasses = `font-bold ${isPulsing ? 'text-red-600 animate-pulse-slow' : ''}`;

  return (
    <span className={timerClasses}>
      00 : {minutes.toString().padStart(2, "0")} : {seconds.toString().padStart(2, "0")}
    </span>
  );
}
