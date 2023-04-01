import React from "react";

export default function Item({ image, title, price, handleDelete }) {
  return (
    <div>
      <img src={image} alt="image" />
      <h3>{title}</h3>
      <h4>€{price}</h4>
      <button onClick={handleDelete}>Ištrinti</button>
    </div>
  );
}
