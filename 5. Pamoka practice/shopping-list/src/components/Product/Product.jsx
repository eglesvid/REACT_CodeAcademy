import React from "react";
import styles from "./Product.module.css";

export default function Product(props) {
  const { text, handleDelete } = props;

  return (
    <div className={styles.product}>
      <p>{text}</p>
      <button onClick={handleDelete} style={{ margin: "10px" }}>
        Delete
      </button>
    </div>
  );
}
