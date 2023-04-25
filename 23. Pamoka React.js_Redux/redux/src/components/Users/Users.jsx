import React from "react";
import { useDispatch, useSelector } from "react-redux"; // useDispatch: siusti actions dispatchui; useSelector: pasiimti konkretu state is savo store
import { fetchUsers } from "../../redux/actions/usersActions";

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users); // pasiduodam f-ija, kuri prisiima state, ir mes is to state kazkoki konkretu gabaliuka norim pasiimt. Ka returninam sitoj f-ijoje, tokia reiksme ir bus
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  return (
    // onClick f-ija iskvies dispatcha ir jam paduos action, kuri mes norim padaryti
    <div>
      <button onClick={() => dispatch(fetchUsers(5))}>5 users</button>
      <button onClick={() => dispatch(fetchUsers(10))}>10 users</button>
      {loading && <h1>Loading...</h1>}
      {error && <p>Error: {error}</p>}
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              name: {user.name} email: {user.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
