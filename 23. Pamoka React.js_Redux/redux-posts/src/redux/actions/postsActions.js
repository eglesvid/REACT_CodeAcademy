// actions: apibrezimai, ka mes norim padaryti

import axios from "axios";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
} from "../constants/postsConstants";

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsError = (error) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: error,
});

export const fetchPosts = (count) => async (dispatch) => {
  dispatch(fetchPostsRequest());
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const posts = response.data.slice(0, count); // imam nuo pacio pirmo elemento iki count
    dispatch(fetchPostsSuccess(posts));
  } catch (error) {
    dispatch(fetchPostsError(error.message));
  }
};
