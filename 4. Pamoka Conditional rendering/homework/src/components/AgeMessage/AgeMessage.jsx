import React, { useState } from "react";
import style from "./AgeMessage.module.css";

// export default function AgeMessage() {
//   const [age, setAge] = useState("");
//   const [message, setMessage] = useState("");

//   const handleAgeSubmit = (e) => {
//     e.preventDefault();
//     if (age < 18) {
//       setMessage("You are not old enough to view this content");
//     } else {
//       setMessage("Welcome to our website, have fun ;)!");
//     }
//   };

//   return (
//     <div className="age-message">
//       <h2>Enter your age to continue:</h2>
//       <form onSubmit={handleAgeSubmit}>
//         <input
//           type="number"
//           placeholder="Enter your age"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// Panasus budas:
export default function AgeMessage() {
  const [age, setAge] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (age < 18) {
      setMessage("You are not old enough to view this content");
    } else {
      setMessage("Welcome to our website, have fun ;)");
    }
  };
  return (
    <div className={style["age-message-container"]}>
      <form onSubmit={handleSubmit}>
        <label htmlFor={style["age-input"]}>Enter your age:</label>
        <input type="number" id="age-input" value={age} onChange={(e) => setAge(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <p className={style["age-message"]}>{message}</p>
    </div>
  );
}
