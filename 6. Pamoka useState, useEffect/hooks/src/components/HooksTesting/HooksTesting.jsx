import React, { useState, useEffect } from "react";

export default function HooksTesting() {
  const [text, setText] = useState("");

  function resizeHandler() {
    console.log("resized", window.innerWidth);
  }

  useEffect(() => {
    console.log("mount");
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      console.log("unmount");
    }; //return vietoj galim cleanup padaryt. Jei neturetume return kodo gabalo, kiekviena karta, kai persirendina sitas komponentas, vis uzdetume nauja eventlistener (laikui begant suletintu app). Saus tik tada, kai komponentas issitrins/persirendins. VEIKIA TIK SU TUSCIU ARRAY
  }, []);

  //   useEffect(() => {
  //     console.log(text);
  //   }, [text]);
  //pvz. sitas issaus tik tada, kai pasikeicia text kintamasis. Ir tada nebeconsolina. Jeigu butu paduotas tuscias array - ideali vieta daryti fetch

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText("Hello")}>Hello</button>
      <button onClick={() => setText("Bye")}>Bye</button>
    </div>
  );
}
