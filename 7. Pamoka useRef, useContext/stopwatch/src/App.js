import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Display from "./components/Display/Display";
import Controls from "./components/Controls/Controls";

export const TimeContext = React.createContext();

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false); //dar vienas state, ar timer dabar eina
  const timerRef = useRef();

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } //tikrinam, kada pasikeicia isRunning reiksme

    return () => {
      clearInterval(timerRef.current);
    }; //uztenka tik return, nereik else, nes komponento state pasikeicia, jis pasirefreshina ir sauna sitas return
  }, [isRunning]); //tikrinsim, kada pasikeicia reiksme //setInterval reik kazkur issisaugot, kad galetume po to sustabdyti

  return (
    <div>
      <TimeContext.Provider value={{ time, setIsRunning, setTime }}>
        <Display />
        <Controls />
      </TimeContext.Provider>
    </div>
  );
}

export default App;
