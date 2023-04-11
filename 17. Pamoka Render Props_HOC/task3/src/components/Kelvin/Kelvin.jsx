import React from "react";
import "../../App.css";

export default function Kelvin({ value }) {
  return <div className="temp">{parseInt(value || 0) + 273.15}K</div>;
}
