import React from "react";

export default function Card({ isVisible, toggle, header, source, bodyText }) {
  return (
    <div>
      <h1>{header}</h1>
      <button onClick={toggle}>Toggle</button>
      <img
        style={{ display: isVisible ? "block" : "none", maxWidth: "200px" }}
        src={source}
        alt="some description"
      />
      <p>{bodyText}</p>
    </div>
  );
}
