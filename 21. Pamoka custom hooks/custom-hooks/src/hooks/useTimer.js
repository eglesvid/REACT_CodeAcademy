import { useState, useRef } from "react"; //setInterval issisaugot reiks ref

export default function useTimer(initialTime) {
  const [time, setTime] = useState(initialTime);
  const timerRef = useRef(null);

  function start() {
    if (timerRef.current === null) {
      //jeigu jau yra pradetas skaiciavimas, nenorim, kad dar viena is naujo pradetu, tai pasirasom sita pirma if'a. Jeigu yra null, reiskias, dar nebuvo pradetas joks timeris. Jeigu jau buvo pradetas timeris, mes nieko nenoresim daryt (start daugiau nieko ir neturi daryt)
      timerRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          return Math.max(prev - 1, 0);
        }); //noresim grazint viena is 2 reiksmiu: arba prev - 1, arba 0. Tai bet kuri is ju, kuri yra didesne. Principe, jeigu prev reiksme -1, mum grazins 0
      }, 1000);
    }
  }

  function pause() {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  } //1. patikrinam, ar jau eina timeris. Jeigu paspaudziam pause mygtuka, istrinam intervala ir padarom, kad timeref butu null. Jei paspaudziam start, jis vis tiek skaiciuoja nuo musu state variable vel zemyn, tai viskas ok

  function reset() {
    pause(); //noresim realiai to paties funkcionalumo
    setTime(initialTime);
  }

  return { time, start, pause, reset };
}

//skaiciuosim laika nuo kazkokio laiko, kuri mums paduoda ir iki 0
