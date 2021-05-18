import React, { useState } from "react";
import "./App.css";

const curtime = () => {
  let current = new Date();
  return current.toLocaleTimeString();
};

const App = () => {
  const updateTime = () => {
    setTime(curtime());
  };
  setInterval(updateTime, 1000);
  const [time, setTime] = useState(curtime());
  return (
    <>
      <div className="time">{time}</div>
      <p className="foot">©2020 Alok Punj Sharma All rights reserved</p>
    </>
  );
};

export default App;
