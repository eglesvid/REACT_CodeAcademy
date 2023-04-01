import React, { useState } from "react";

export default function AddTaskForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [isCorrect, setIsCorrect] = useState(true);

  function handleChange(e) {
    const value = e.target.value;
    setText(value);
  } //kai pasikeis reiksme, noresim issaugot nauja parasyta reiksme sitam variable

  function submitHandler(e) {
    e.preventDefault();
    const number = +text; //jeigu viska graziai konvertuoja, reiskia pas mus buvo tik skaiciai, to mes nenorim. Jeigu gaunam isNaN(=nepavyko konvertuot, ten yra ir skaiciu, ir raidziu/tik raidziu)

    if (isNaN(number) && text.trim().length !== 0) {
      handleAdd(text.trim());
      setText(""); //kad pasidarytu tuscias input
      setIsCorrect(true);
    } else {
      setIsCorrect(false); //jeigu kuris is virsaus yra neteisingas variantas, tuomet uzdedam state i false
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" onChange={handleChange} value={text} />
      <button type="submit">Add Task</button>
      <p style={{ display: isCorrect ? "none" : "block" }}>Incorrect data</p>
    </form>
  );
}
