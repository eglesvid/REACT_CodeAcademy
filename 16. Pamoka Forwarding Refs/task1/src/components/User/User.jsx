import React from "react";
import PropTypes from "prop-types";

export default function User({ name, handleClick }) {
  return (
    <li onClick={handleClick}>
      <h4>{name}</h4>
    </li>
  );
}

User.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
};
