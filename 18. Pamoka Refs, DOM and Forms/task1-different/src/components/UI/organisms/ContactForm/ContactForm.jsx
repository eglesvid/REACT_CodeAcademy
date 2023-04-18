import React, { useState, useEffect, useRef } from "react";
import FormInput from "../../molecules/FormInput/FormInput";
import Button from "../../atoms/Button/Button";
import { StyledForm } from "./ContactForm.styled";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [helperTexts, setHelperTexts] = useState({
    username: "",
    email: "",
  }); //noresim i ji ideti ta teksta, kuri noresim atvaizduoti po inputais jei user kazka neteisingai suvede. Pvz., tikrinsim, jeigu username per trumpas, kad atsirastu helperText. Reiskia, pasetinsim state'a, tarkim username:, kad cia butu kazkoks tekstas ir tada jis atsiras apacioj. Tuomet kiekviena karta, kai keisis sitas input field, galesim vel is naujo tikrinti, ar jau atitinka musu kriterijus ir jei atitinka, pakeisim sita state variable, kad jis vel butu tuscias stringas. Darysim su useEffect -> noresim kazkoki koda paleisti, kai userName ir email pasikeicia

  //kad pasikeistu border stilius, reikes useRef, kuriuos noresim persiduot FormInput. validateInputs() f-joje noresiu keisti input'u stilius, todel tam reiks ref'o
  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const isFirstTimeRef = useRef(true);

  useEffect(() => {
    validateInputs();
  }, [userName, email]);

  function validateInputs() {
    if (isFirstTimeRef.current) {
      return;
    } //nieko cia nedarysim, jeigu isFirstTimeRef=true

    let userNameValid = true;
    let emailValid = true;

    if (userName.length < 6) {
      userNameValid = false;
    }

    if (!email.includes("@")) {
      emailValid = false;
    }

    if (userNameValid) {
      userNameRef.current.style.border = "1px solid green";
    } else {
      userNameRef.current.style.border = "1px solid red";
    }

    if (emailValid) {
      emailRef.current.style.border = "1px solid green";
    } else {
      emailRef.current.style.border = "1px solid red";
    }

    //dabar ziurint i tai, kaip pasikeite userNameValid ir emailValid, galesim paupdatint musu state variable. F-ija validateInputs() noresim iskviest tik tada, kai pasikeicia userName arba email
    setHelperTexts({
      username: userNameValid ? "" : "User Name is too short",
      email: emailValid ? "" : "Please enter a valid email address",
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    isFirstTimeRef.current = false; //noresim, kad patikrinimas vyktu tuomet, kai paspaudziam submit mygtuka (dabar kai paspaudziam, tai nera pirmas kartas ir dw validuok)
    validateInputs(); //musu komponentas nepersikrauna, kai paspaudziam submit, todel rankiniu budu patiem reik issikviest validateInputs()
  } //reikes susikurti useRef kintamaji patikrinti, ar pries tai dar nebuvo submitinta. Jei tiesiog const isFirstTime = true; daryciau, tai kiekviena karta, kai pasirefreshintu komponentas, musu reiksme defaultintusi i true. Jei naudojam useRef, ta pati reiksme islieka ir komponentui persirendinant. Musu komponentas persirendina kiekviena karta, kai kazkas pakeiciama situose input fielduose ar submit mygtukas paspaudziamas, del to reik useRef

  return (
    <StyledForm>
      <FormInput
        name={"name"}
        labelText={"Name"}
        type={"text"}
        value={name}
        onChange={setName}
        hasIcon={false}
      />
      <FormInput
        ref={userNameRef}
        helperText={helperTexts.username}
        name={"username"}
        labelText={"Username"}
        type={"text"}
        value={userName}
        onChange={setUsername}
        startIcon={<i className="fa-solid fa-user"></i>}
        hasIcon={true}
        endIcon={
          helperTexts.username ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-check"></i>
          )
        }
      />
      <FormInput
        ref={emailRef}
        helperText={helperTexts.email}
        name={"email"}
        labelText={"Email"}
        type={"email"}
        value={email}
        onChange={setEmail}
        startIcon={<i className="fa-solid fa-envelope"></i>}
        hasIcon={true}
        endIcon={
          helperTexts.email ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-check"></i>
          )
        }
      />
      <Button text={"Submit"} click={submitHandler} />
      <Button text={"Cancel"} />
    </StyledForm>
  );
}
