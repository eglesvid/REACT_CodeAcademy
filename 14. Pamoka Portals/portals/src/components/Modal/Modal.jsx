import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1000, //padaro, kad elementas butu auksciau. kas turi didesne reiksme, tas yra labiau matomas
};

const backgroundStyles = {
  position: "fixed",
  backgroundColor: "rgba(0,0,0, 0.5)",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
};

export default function Modal({ open, closeModal }) {
  if (!open) {
    return null;
  } //jeigu uzdarytas, grazinsim null

  return ReactDOM.createPortal(
    <>
      <div style={backgroundStyles}></div>
      <div style={modalStyle} className={styles.modal}>
        <h3>This is our modal</h3>
        <button onClick={closeModal}>Close</button>
      </div>
    </>,
    document.getElementById("modal")
  );
}
