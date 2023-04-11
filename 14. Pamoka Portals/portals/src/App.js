import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open</button>
      <Modal open={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  );
}

export default App;
