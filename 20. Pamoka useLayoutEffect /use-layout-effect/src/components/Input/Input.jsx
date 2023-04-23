import React, { useEffect, useState, useLayoutEffect, useRef } from "react";

export default function Input({ text, setText }) {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const divRef = useRef(null); //kad galeciau patogiai pasiekti div, naudosiu ref. Ji uzsimetu ant div apacioje. Ir tuomet useEffecte galiu lengvai pasiekti ta div

  //   function onResizeHandler() {
  //     console.log(window.innerWidth);
  //   }

  //   useEffect(() => {
  //     window.addEventListener("resize", onResizeHandler);

  //     return () => {
  //       window.removeEventListener("resize", onResizeHandler);
  //     }; //issaus tik tada, kai issitrins komponentas is DOMo (issitrina, kai perrendinam komponenta, pasikeicia state arba pasikeicia props). Daznai naudojama, jei useEffecte naudojam eventus, timerius ir pan (aka tokiem dalykam, kurie uzsilieka)
  //   }, []);

  //   useEffect(() => {
  //     console.log("second useEffect");
  //   }, [count]);

  //   useEffect(() => {
  //     console.log("useEffect prop Change");
  //   }, [text]);

  useLayoutEffect(() => {
    if (divRef.current == null) {
      return;
    } //nenorim nieko daryt, jei taip yra, del to return

    const top = divRef.current.style.top;
    divRef.current.style.top = `${top + 200}px`;
    console.log(top);
  }, [show]); //realiai trumpas mirktelejimas ivyksta (is pradziu atsiranda auksciau, o tada zemai). Taip ivyksta del to, nes useEffect yra asinchroninis. Jei noretume issprest sia problema, parasom useLayoutEffect. Tuomet palauktu, pries renderinant musu komponenta (step by step, jei naudojam useLayoutEffect: paspaudziam mygtuka, state pasikeicia ir musu komponentas persirendina. Kai persirendinimas vyksta, React is pradziu apskaiciuoja visus DOM elementus, ju pozicijas ir pan. ir tada tik renderina. Sitas useLayoutEffect eina iskart uz paskaiciavimu. Reiskia, suskaiciavo, tada galima naudoti useLayoutEffect, kad padarytume kazkokius pakeitimus. Tada is naujo perskaiciuoja ir tada is naujo surendina. Taip iseina, kad mes net nepamatom to mirktelejimo, nes na, jo niekada ir nebuvo, nes nespejo surendinti = uzbegom uz akiu)

  //   useLayoutEffect(() => {
  //     console.log("useLayoutEffect");
  //   }, [count]); //useLayoutEffect sinchroninis, jo palaukia musu reactas pries surendindamas viska i ekrana (o useEffect nelaukia). useEffect asinchroninis, norim ji naudot, kad neblokuotumem musu reacto

  return (
    <div>
      {/* <button onClick={() => setCount((prev) => ++prev)}>Click Me</button>
      <p>{count}</p>
      <label htmlFor="">{text}</label>
      <input type="text" onChange={(e) => setText(e.target.value)} /> */}
      <button onClick={() => setShow((prev) => !prev)}>Click Me</button>
      {show && (
        <div ref={divRef} style={{ position: "absolute" }}>
          Labas
        </div>
      )}
    </div>
  );
}
