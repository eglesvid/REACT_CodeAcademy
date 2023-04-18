import React from "react";
import User from "../User/User";
import PropTypes from "prop-types";

export default function UserList({ users }) {
  return (
    <>
      <ul>
        {users.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </ul>
    </>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.exact({
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
    })
  ).isRequired,
};
