import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Page404() {
  const [time, setTime] = useState(5);
  const timeRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    timeRef.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000); //uzdes intervala, kuris kas sekunde atimines is time state'o (kaitalios state kas sekunde)

    return () => {
      clearInterval(timeRef.current);
    }; //kai iseisim noresim, kad intervalas issivalytu, kad neatiminetu iki begalybes
  }, []);

  //seka kaip keiciasi musu time, grazins atgal i main psl:
  useEffect(() => {
    if (time === 0) {
      navigate("/");
    }
  }, [time]);

  return (
    <h3>
      Sorry this page does not exist <br />
      Redirecting you to Main page in {time} seconds...
    </h3>
  );
}
