import React from "react";
import PropTypes from "prop-types";
import styles from "./Song.module.css";

export default function Song(props) {
  const { title, artist, duration } = props;

  return (
    <div className={styles["song-container"]}>
      <p>{title}</p>
      <p>{artist}</p>
      <p>{duration}</p>
    </div>
  );
}

Song.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};
