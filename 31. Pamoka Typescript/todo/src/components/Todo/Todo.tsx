import React, { useState } from "react";

// reikia propsu type apsirasyt
type TodoProps = {
  text: string;
  onDelete: () => void;
};

export default function Todo({ text, onDelete }: TodoProps) {
  const [completed, setCompleted] = useState<boolean>(false);

  function handleChange() {
    setCompleted((prev) => !prev);
  } // kiekviena karta, kai pasikeis inputo reiksme (principe varnele uzdeta/nuimta), mes pakeisim reiksme

  return (
    <div>
      <input type="checkbox" onChange={handleChange} />
      <span style={{ textDecoration: completed ? "line-through" : "" }}>{text}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
