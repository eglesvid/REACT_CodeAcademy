import React, { useState } from "react";
import Button from "../Button/Button";

export default function Greeting(props) {
  const [loggedIn, setLoggedIn] = useState(false); //defaultinis state bus false

  return (
    <div>
      {loggedIn ? (
        <p>You are logged in</p>
      ) : (
        <div>
          <p>Please log in</p>
          <Button buttonHandler={setLoggedIn} />
        </div> //toks yra budas paupdatint parent element, esant vaikiniam elemente. Ganetinai daznai naudojama, pvz., su forma
      )}
    </div>
  );
}
