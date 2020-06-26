import React, { useState } from "react";

function App() {
  const [time, latestTime] = useState();

  function GetTime() {
    latestTime(new Date().toLocaleTimeString("it-IT"));
    console.log(time);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={GetTime}>Get Time</button>
    </div>
  );
}

export default App;
