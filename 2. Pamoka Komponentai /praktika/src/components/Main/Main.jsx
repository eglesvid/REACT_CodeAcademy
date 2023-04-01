import React from "react";
import Title from "../Title/Title";
import Container from "../Container/Container";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <main className={styles.main}>
      <Container>
        <img
          className={styles["desert-image"]}
          src="https://cdn.britannica.com/10/152310-050-5A09D74A/Sand-dunes-Sahara-Morocco-Merzouga.jpg"
          alt="desert"
        />
        <Title text="About" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nihil
          modi voluptates tenetur consectetur facere quis eligendi obcaecati
          architecto. At eligendi excepturi amet porro nisi ut vero explicabo
          nemo quia.
        </p>
      </Container>
    </main>
  );
}
