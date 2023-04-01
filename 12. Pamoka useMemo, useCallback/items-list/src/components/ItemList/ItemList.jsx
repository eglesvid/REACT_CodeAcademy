import React, { useState, useMemo } from "react";
import Item from "../Item/Item";

export default function ItemList({ items }) {
  //   const [sortedItems, setSortedItems] = useState(items);
  const [number, setNumber] = useState(0);

  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a.price - b.price);
  }, [items]);

  return (
    <div>
      <button onClick={() => setNumber((prev) => ++prev)}>Increment</button> <br />
      {number}
      {sortedItems.map((item) => {
        return (
          <Item key={item.id} description={item.description} price={item.price} name={item.name} />
        );
      })}
    </div>
  );
} //kai didinsim value, tie is naujo nesisortins. Jie jau viena karta yra susortinti, viskas ok
