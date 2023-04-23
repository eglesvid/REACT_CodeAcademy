//i hooks'a issikeliam visa inputu logika

import { useState } from "react";

export default function useFormInput(initial) {
  const [value, setValue] = useState(initial);

  function onChange(event) {
    setValue(event.target.value);
  }

  return { value, onChange }; //negaliu rasyt "return value, onChange", del to grazinam kaip objekta. Daznai norim grazinti daugiau negu viena dalyka, todel yra tokia iseitis
}
