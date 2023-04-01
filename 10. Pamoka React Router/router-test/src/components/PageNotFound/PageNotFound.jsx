import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; //navigacijai padeda dar vienas hook. Nereikia kurti a tag'u

export default function PageNotFound() {
  const navigate = useNavigate(); //kai iskviesim, paduosim, kur norim nueit

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  }, []);
  return <div>PageNotFound</div>;
}
