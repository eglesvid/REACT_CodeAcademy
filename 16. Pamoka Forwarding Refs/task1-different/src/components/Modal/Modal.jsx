import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
  backgroundColor: "rgba(255, 255, 255, 1)",
  minHeight: "20rem",
  minWidth: "20rem",
  padding: "2rem",
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

export default function Modal({ open, closeModal, children }) {
  if (!open) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div onClick={closeModal} style={backgroundStyles}></div>
      <div style={modalStyle}>
        {children}
        <button onClick={closeModal}>Close</button>
      </div>
    </>,
    document.getElementById("modal")
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  closeModal: PropTypes.func,
  children: PropTypes.element,
};
