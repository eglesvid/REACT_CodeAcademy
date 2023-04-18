import React from "react";
import PropTypes from "prop-types";

export default function DetailedUserInfo({ user }) {
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>
        Address: {user.address.street} {user.address.suite} {user.address.city}
      </p>
    </div>
  );
}

DetailedUserInfo.propTypes = {
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
  }).isRequired,
};
