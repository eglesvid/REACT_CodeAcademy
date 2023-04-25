import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest, fetchPosts } from "../../redux/actions/postsActions";

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);

  return (
    <div>
      <button onClick={() => dispatch(fetchPosts(5))}>See 5 posts</button>
      <button onClick={() => dispatch(fetchPosts(10))}>See 10 posts</button>
      {loading && <h1>Loading...</h1>}
      {error && <p>Error: {error}</p>}
      <ul>
        {posts.map((posts, index) => {
          return (
            <li key={index}>
              title: {posts.title} body: {posts.body} <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
