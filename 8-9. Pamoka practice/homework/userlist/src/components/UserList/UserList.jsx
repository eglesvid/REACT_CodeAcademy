import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setTimeout(() => {
          setUsers(res.data);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return isLoading ? (
    <h1>Loading Users...</h1>
  ) : error !== null ? (
    <h1>{error}</h1>
  ) : (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Company: {user.company.name}</p>
        </li>
      ))}
    </ul>
  );
}
