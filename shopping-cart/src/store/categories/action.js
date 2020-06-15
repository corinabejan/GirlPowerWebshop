import axios from "axios";
import { API_URL } from "../../config";

export function startLoading() {
  return {
    type: "LOADING",
    payload: {
      loading: true,
    },
  };
}

export function postsFetched(data) {
  return {
    type: "FETCH_POSTS",
    payload: {
      loading: false,
      categories: data,
    },
  };
}

export async function fetchCategories(dispatch, getState) {
  const state = getState();
  dispatch(startLoading());

  const output = await axios.get(`${API_URL}/categories`);
  dispatch(postsFetched(output.data.categories));
}
