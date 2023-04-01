import React from "react";
import { deletePostById } from "../../api-calls/posts";

export default function Post({ body, id, setPosts }) {
  function deleteButtonHandler() {
    deletePostById(id).then((res) => {
      setPosts((prev) => {
        return prev.filter((post) => post._id !== id);
      });
    });
  } //catch'o kaip ir nereik. Principe padarom kazka tik sekmes atveju. Nes nesekmingu atveju nenoresim nieko isimt is savo state

  return (
    <div>
      <hr />
      <p>{body}</p>
      <button onClick={deleteButtonHandler}>Delete</button>
      <hr />
    </div>
  );
}
