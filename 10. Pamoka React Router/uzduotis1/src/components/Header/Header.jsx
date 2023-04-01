import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <Link to="/todos">Todos</Link>
        <Link to="/comments">Comments</Link>
        <Link to="/posts">Posts</Link>
      </header>
      <Outlet />
    </>
  );
}
