import React, { useState } from "react"; //useState padeda susikurti vidini komponento state
import PropTypes from "prop-types";

export default function MathButton(props) {
  const { text, action, array } = props;

  const [buttonText, setButtonText] = useState(text); //useState galim isivaizduot kaip kintamojo sukurima. Vienintelis dalykas, kuo skiriasi nuo let/const yra ta, kad kai jo reiksme pasikeicia, musu komponentas persirendina. useState grazina du dalykus: kintamaji, kuri mes galim naudot (buttonText) ir funkcija, su kurios pagalba galim pakeist ta buttonText. Galim visa sita sintakse isivaizduot kaip sudetingesnis buda pasirasyt kintamaji. Skliausteliuose nusirodom pradine reiksme

  function buttonHandler() {
    setButtonText(`Answer is ${action(...array)}`);
  }

  return <button onClick={buttonHandler}>{buttonText}</button>; //nerasyti skliausteliu, nes iskart kai susirendins komponentas, isaus sita f-ija = negausim savo norimo funkcionalumo
}

MathButton.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  array: PropTypes.arrayOf(PropTypes.number).isRequired,
  //   array: PropTypes.arrayOf(
  //     PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  //   ),
  //   textOrNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  //   person: PropTypes.exact({
  //     name: PropTypes.string,
  //     age: PropTypes.number,
  //   }),
  //   something: PropTypes.any.isRequired, //any stengiames vengti. Vienintele option butu nebent su .isRequired naudot (= svarbu, kad kazka idetu)
  //   header: PropTypes.node, //viskas, ka gali surenderinti ant ekrano, pvz., html element, array, string, number. Negaletu buti object, function. Zdz, su node galim patikrint ar bent jau renderinasi
};
