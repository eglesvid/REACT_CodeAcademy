import React from "react";
import Title from "../Title/Title";
import Container from "../Container/Container";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["footer-background"]}>
      <Container>
        <Title text="Contacts" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
          repellendus incidunt error accusamus voluptatum enim sapiente
          doloremque impedit fuga esse blanditiis quidem praesentium quo
          excepturi, dicta corporis dolorem quaerat recusandae.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo porro
          deserunt autem nostrum provident expedita tempore accusantium?
          Eligendi minus, expedita enim officia iure distinctio, nesciunt nihil
          quaerat sed, accusantium temporibus.
        </p>
      </Container>
    </footer>
  );
}
