import React, { useState } from "react";

function App() {
  const [time, latestTime] = useState();

  function GetTime() {
    latestTime(new Date().toLocaleTimeString("it-IT"));
    console.log(time);
  }
  function setTimer(){
    setInterval(GetTime, 1000);
  }
  
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={setTimer}>Get Time</button>
    </div>
  );
}

export default App;
