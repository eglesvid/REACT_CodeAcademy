import React from "react";

export default function Paragraph({ isVisible, toggle }) {
  return (
    <div>
      <button onClick={toggle}>Toggle Visibility</button>
      <p style={{ display: isVisible ? "block" : "none" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi optio in ipsa praesentium
        quo, laboriosam quod excepturi quaerat assumenda explicabo!
      </p>
    </div>
  );
}
