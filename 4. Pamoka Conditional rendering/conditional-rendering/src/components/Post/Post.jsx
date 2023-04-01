import React from "react";
import styles from "./Post.module.css";

export default function Post(props) {
  const { img, text } = props;

  return (
    <div>
      <img src={img} alt="kazkas" />
      <p>{text}</p>
    </div>
  );
}
