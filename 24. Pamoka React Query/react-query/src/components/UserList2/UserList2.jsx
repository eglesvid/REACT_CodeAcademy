import React from "react";
import useUsers from "../../hooks/useUsers";

export default function UserList2() {
  const { data, isLoading, isError, error } = useUsers();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {data.map((user) => {
        return (
          <div>
            <p>{user.email}</p>
            <p>{user.dob.date}</p>
          </div>
        );
      })}
    </div>
  );
}
