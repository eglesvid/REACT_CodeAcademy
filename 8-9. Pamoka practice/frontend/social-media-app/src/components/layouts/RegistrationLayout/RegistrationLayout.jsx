import React, { useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom"; //kad programiniu budu nuvestu i kita psl
import { signUpRequest } from "../../../api-calls/auth"; //nereikia rasyti index, nes React ganetinai ismanus. Viduje turi webpack'a, kuris duoda papildomu funkcionalumu (supranta, kad jeigu parasom folder ir neparasom index js, kad imsim pagr. faila)

export default function RegistrationLayout() {
  //kad issaugotume visas sitas reiksmes, mums reik:
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(null);

  const navigate = useNavigate();

  function registrationUpdateHeading() {
    if (isRegistrationSuccessful === false) {
      return <h1>Registration Failed</h1>;
    }
  }

  //norim siust info backend'ui
  //is state pasiimam dalykus:
  async function submitHandler(e) {
    e.preventDefault();
    const body = {
      firstName,
      lastName,
      email,
      password,
      dateOfBirth,
    };

    const signUpResponse = await signUpRequest(body);

    if (signUpResponse) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setDateOfBirth("");
      setPassword("");

      navigate("/auth/signin");
    } //jeigu true, pasetinam state i pradines reiksmes

    setIsRegistrationSuccessful(signUpResponse);
  }

  //kai pasikeicia input, kad i state isidetu naujas value: onClick=
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <label htmlFor="dateOfBirth">Date Of Birth</label>
      <input
        type="date"
        id="dateOfBirth"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
      />
      <br />
      <button type="submit">Register</button>
      <br />
      <Link to="/auth/signin">Sign In Instead</Link>
      {registrationUpdateHeading()}
    </form>
  );
}
