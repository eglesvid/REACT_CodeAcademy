import React, { useState, useMemo } from "react";

export default function Memo() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(true);

  const square = useMemo(() => {
    return heavyCalculation();
  }, [number]); //sito heavyCalculation issaugoja cash'e

  function heavyCalculation() {
    for (let index = 0; index < 1000000000; index++) {}
    return number * number;
  }

  return (
    <div>
      <input type="number" onChange={(e) => setNumber(+e.target.value)} />
      <br />
      <button
        style={{ backgroundColor: dark ? "darkgray" : "grey" }}
        onClick={() => setDark((prev) => !prev)}
      >
        Toggle
      </button>
      <br />
      {square}
    </div>
  );
}
