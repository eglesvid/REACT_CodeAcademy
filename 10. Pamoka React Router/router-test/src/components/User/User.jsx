import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams(); //pasiimam is visu parametru tik id. Pavadinimas priklauso nuo musu uzvadinto dinaminio route

  return <div>User {id}</div>;
}
