import { useState, useEffect } from "react";

export default function useSumOfNumbersInArray(array) {
  const [sum, setSum] = useState(0); //suma galim issisaugot state'e, o skaiciavimus atlikti useEffecte, kai pasikeicia musu array

  useEffect(() => {
    const filtered = array.filter((item) => typeof item === "number");
    const totalSum = filtered.reduce((a, b) => a + b, 0);
    setSum(totalSum);
  }, [array]);

  return sum;
}
