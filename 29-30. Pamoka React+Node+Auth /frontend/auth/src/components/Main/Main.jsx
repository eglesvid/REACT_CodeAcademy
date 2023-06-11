import axios from "axios";
import React, { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";

export default function Main() {
  const { permissions, token } = useContext(LoginContext); // nurodom, kuri konkreciai context norim pasiekti

  async function postSomething() {
    try {
      const response = await axios.post("http://localhost:4000/writeStuff", { token }); // dar noresim tokena pasiduoti
      console.log("all is good");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>{permissions.includes("write") && <button onClick={postSomething}>Send</button>}</div>
  );
}
