import { Link } from "react-router-dom";
import React from "react";

export default function Navigation() {
  return (
    <div>
      <Link to={"/apple"}>Apple</Link>
      <Link to={"/samsung"}>Samsung</Link>
      <Link to={"/tesla"}>Tesla</Link>
    </div>
  );
}
