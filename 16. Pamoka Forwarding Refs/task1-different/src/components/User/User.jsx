import PropTypes from "prop-types";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import DetailedUserInfo from "../DetailedUserInfo/DetailedUserInfo";

export default function User({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  function onClickHandler() {
    setIsOpen(true);
  }

  return (
    <>
      <li onClick={onClickHandler}> {user.name}</li>
      <Modal open={isOpen} closeModal={() => setIsOpen(false)} user={user}>
        <DetailedUserInfo user={user} />
      </Modal>
    </>
  );
}

User.propTypes = {
  user: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.exact({
      street: PropTypes.string,
      suite: PropTypes.string,
      city: PropTypes.string,
      zipcode: PropTypes.string,
      geo: PropTypes.exact({
        lat: PropTypes.string,
        lng: PropTypes.string,
      }),
    }),
    phone: PropTypes.string,
    website: PropTypes.string,
    company: PropTypes.exact({
      name: PropTypes.string,
      catchPhrase: PropTypes.string,
      bs: PropTypes.string,
    }),
  }),
};
