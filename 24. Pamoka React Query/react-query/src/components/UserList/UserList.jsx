import React from "react";
// import axios from "axios"; // sitam faile nebereikia
// import { useQuery, useMutation } from "@tanstack/react-query"; // useQuery: daryti get requestus, kurie nieko realiai nekeicia; useMutation: daryti requestams i backenda, pvz., post/delete, kurie mutuoja musu duomenis // sitam faile nebereikia
import useUsers from "../../hooks/useUsers";

export default function UserList() {
  const { isLoading, isError, data, error } = useUsers(); // galim nerasyt const usersQuery = useUsers();, kadangi grazina objekta ir galim vietoj destructurint tai, ko mums reikia

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <pre>{error}</pre>;
  }

  return (
    <div>
      {data.map((user) => {
        return (
          <div>
            <p>
              {user.name.first} {user.name.last}
            </p>
            <img src={user.picture.medium} alt="" />
          </div>
        );
      })}
    </div>
  );
}
