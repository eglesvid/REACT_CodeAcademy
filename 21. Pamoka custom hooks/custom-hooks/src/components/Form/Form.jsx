import React, { useEffect } from "react";
import useFormInput from "../../hooks/useFormInput";
import useTimer from "../../hooks/useTimer";

export default function Form() {
  const name = useFormInput("");
  const email = useFormInput("");
  const timer = useTimer(10);

  function submitHandler(e) {
    e.preventDefault();
    console.log(name.value);
    console.log(email.value);
  }

  useEffect(() => {
    timer.start();

    return () => {
      timer.pause();
    };
  }, []); //noresim, kad skaiciavimas prasidetu nuo tada, kai musu komponentas uzsikrauna, tai galim useEffect panaudoti. Pasiduodam tuscia array, kad ivyktu tiktai viena karta. Jeigu pasiresetina sitas komponentas, noresim returnint f-ija pause

  return (
    <form onSubmit={submitHandler}>
      <p>Time before sale ends {timer.time}</p>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" {...name} /> <br />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" {...email} /> <br />
      <button type="submit">Submit</button>
    </form>
  );
} //galiu rasyt taip: value={name.value} onChange={name.onChange} arba {...name}. Tai automatiskai uz mus prides du props'us, kuriu pavadinimai bus butent tokie, kaip yra tam name objekte. Pirmas bus value, o antras onChange, butent tokius, kuriuos grazinam. Tai kadangi grazinam lygiai tokiu paciu pavadinimu, galim toki trumpini panaudot --> ir on value, ir onChange uzsides
