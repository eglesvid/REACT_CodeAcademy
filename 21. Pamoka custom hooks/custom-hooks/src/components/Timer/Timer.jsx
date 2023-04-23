import React from "react";
import useTimer from "../../hooks/useTimer";

export default function Timer() {
  const timer = useTimer(5); //noresim, kad grazintu 3 f-ijas ir pati ta skaiciuojama laika
  return (
    <div>
      <p>{timer.time}</p>
      <button onClick={timer.start}>Start</button>
      <button onClick={timer.pause}>Pause</button>
      <button onClick={timer.reset}>Reset</button>
    </div>
  );
}
