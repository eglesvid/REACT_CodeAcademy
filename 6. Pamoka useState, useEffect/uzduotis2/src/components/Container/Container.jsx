import React, { useState, useEffect } from "react";

export default function Container() {
  const [text, setText] = useState("posts");
  const [data, setData] = useState([]); //nelabai galim patikrint, ar sitas array yra tuscias, kadangi po to jis niekad nebebuna tuscias, jis pasikeicia i kita, todel mums reik dar vieno state variable:
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/${text}`)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          setIsLoading(false); //dabar jau viskas ok, uzsikrove
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
  }, [text]);

  useEffect(() => {
    if (isLoading) {
      const buttons = document.querySelectorAll("button");
      buttons.forEach((button) => {
        button.disabled = true;
        setTimeout(() => (button.disabled = false), 2000);
      });
    }
  }, [isLoading]);

  return (
    <div>
      {text}
      <button onClick={() => setText("posts")}>Posts</button>
      <button onClick={() => setText("comments")}>Comments</button>
      <button onClick={() => setText("albums")}>Albums</button>
      {isLoading ? (
        <h1>Loading {text} </h1>
      ) : (
        data.map((item) => {
          return <p key={item.id}>{JSON.stringify(item)}</p>;
        })
      )}
    </div>
  );
}
