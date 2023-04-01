import React from "react";
import style from "./Product.module.css";
import PropTypes from "prop-types";

export default function Product(props) {
  const { category, name, price } = props;
  return (
    <div>
      <p className={style.category}>{category}</p>
      <p>{name}</p>
      <p>⭐⭐⭐⭐⭐</p>
      <p>
        <b>{price}</b>
      </p>
    </div>
  );
}

Product.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
