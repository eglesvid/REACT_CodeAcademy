import React, { useState } from "react";

export default function AddProductForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [isCorrect, setIsCorrect] = useState(true);

  function handleChange(e) {
    const value = e.target.value;
    setText(value);
  }

  function submitHandler(e) {
    e.preventDefault();
    const number = +text;
    if (isNaN(number) && text.trim().length !== 0) {
      handleAdd(text.trim());
      setText("");
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input style={{ marginLeft: "10px" }} type="text" onChange={handleChange} value={text} />
      <button type="submit">Add Product</button>
      <p
        style={{
          display: isCorrect ? "none" : "block",
          fontStyle: "italic",
          color: "red",
          marginLeft: "10px",
        }}
      >
        Incorrect data. Please enter a valid value
      </p>
    </form>
  );
}
