import React from "react";
import styles from "./Card.module.css";

export default function Card({ heading, author }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{heading}</h2>
      <h6 className={styles.author}>{author}</h6>
      <div className={styles.buttonContainer}>
        <div>
          <button className={styles.button}>
            View on <span className={styles.purple}>Twitter</span>
          </button>
        </div>
        <div>
          <button className={styles.button}>
            Share on <span className={styles.purple}>Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
}
