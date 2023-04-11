import React from "react";
import ReactDom from "react-dom";
import SignInForm from "../SignInForm/SignInForm";

const modalStyle = {
  position: "fixed",
  backgroundColor: "hsl(186 100% 69%)",
  borderRadius: "0.45em",
  padding: "16px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
};

const backgroundStyles = {
  position: "fixed",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 1000,
};

const buttonStyles = {
  padding: "0.35em 1em",
  border: "0.15em solid black",
  borderRadius: "0.45em",
  background: "none",
  margin: "0 auto",
  cursor: "pointer",
};

export default function Modal({ open, closeModal }) {
  if (!open) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div onClick={closeModal} style={backgroundStyles}></div>
      <div style={modalStyle}>
        <h2>Sign In</h2>
        <SignInForm />
        <button style={buttonStyles} onClick={closeModal}>
          Let's go!
        </button>
      </div>
    </>,
    document.getElementById("modal")
  );
}
