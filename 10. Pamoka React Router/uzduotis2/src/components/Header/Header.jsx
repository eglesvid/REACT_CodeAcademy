import React from "react";
import styles from "./Header.module.css";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header>
      <img
        className={styles.logo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png"
        alt="LEGO"
      />
      <Navigation />
    </header>
  );
}
