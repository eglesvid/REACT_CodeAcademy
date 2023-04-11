import React from "react";
import styles from "./SignInForm.module.css";

export default function SignInForm() {
  return (
    <div className={styles.div}>
      <label htmlFor="first-name">First Name</label>
      <input type="text" id="first-name" className={styles.input} /> <br />
      <label htmlFor="last-name">Last Name</label>
      <input type="text" id="last-name" className={styles.input} /> <br />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" className={styles.input} /> <br />
      <label htmlFor="password1">Password</label>
      <input type="password" id="password1" className={styles.input} /> <br />
      <label htmlFor="password2">Repeat Password</label>
      <input type="password" id="password2" className={styles.input} />
    </div>
  );
}
