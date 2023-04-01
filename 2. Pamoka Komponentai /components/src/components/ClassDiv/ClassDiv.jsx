import React, { Component } from "react";
import ClassButton from "../ClassButton/ClassButton.jsx";
import style from "./ClassDiv.module.css";

export default class ClassDiv extends Component {
  render() {
    return (
      <div>
        <h3>Labas</h3>
        <p className={style.green}>{this.props.tekstas}</p>
        <ClassButton />
      </div>
    );
  }
}
