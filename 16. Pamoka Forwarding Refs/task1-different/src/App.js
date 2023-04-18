import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import UserList from "./components/UserList/UserList";

const USERS_HOST = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(USERS_HOST)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <UserList users={users} />
    </div>
  );
}

export default App;
