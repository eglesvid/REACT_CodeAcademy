import React, { useEffect, useState } from "react";

export default function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(5));
    console.log("setting items");
  }, [getItems]); //tik tada, kai gaunam nauja f-ija

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}> {item} </div>
      ))}
    </div>
  );
}
