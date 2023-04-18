import React from "react";

export default function TextInput({ type, placeholder, updateState, checkIfCorrect, style }) {
  function inputHandler(e) {
    updateState(e.target.value);

    if (type === "text") {
      if (e.target.value.length >= 6) checkIfCorrect(true);
      else checkIfCorrect(false);
    } else if (type === "email") {
      if (e.target.value.includes("@")) checkIfCorrect(true);
      else checkIfCorrect(false);
    }

    if (e.target.value.length === 0) {
    }
  }

  return (
    <div>
      <input onChange={inputHandler} type={type} placeholder={placeholder} style={style} />
    </div>
  );
}
