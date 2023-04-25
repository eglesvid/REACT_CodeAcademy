// cia vieta, kur nurodom savo initialState ir vykdom kazkokius actions, pagal tai, koks action buvo paduotas. Juos tikrinam pagal action.type. Cia naudosim case (ar toks buvo, ar toks, ar toks)

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
} from "../constants/postsConstants";

const initialState = {
  posts: [],
  error: "",
  loading: false,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload, error: "" };
    case FETCH_POSTS_ERROR:
      return { ...state, loading: false, posts: [], error: action.payload };
    default:
      return state;
  }
};

export default postsReducer;
