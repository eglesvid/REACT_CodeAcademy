import React, { useState } from "react";

export default function MoodChecker() {
  const [message, setMessage] = useState("Kaip jaučiatės?");

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={() => setMessage("Nieko tokio, viskas bus gerai")}>
        {"Jaučiuosi prastai :("}
      </button>
      <button onClick={() => setMessage("Gerai, nujaučiu, kad greitu metu jausitės puikiai")}>
        Jaučiuosi normaliai : |
      </button>
      <button onClick={() => setMessage("Smagu girdėti, taip ir toliau")}>
        {"Jaučiuosi puikiai :)"}
      </button>
    </div>
  );
}
