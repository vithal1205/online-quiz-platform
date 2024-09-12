// src/components/Timer.js
import React, { useState, useEffect } from "react";

function Timer() {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft === 0) return;
    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  return <h3>Time Left: {timeLeft}s</h3>;
}

export default Timer;
