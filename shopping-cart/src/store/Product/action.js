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

export function productFetched(data) {
  return {
    type: "FETCH_PRODUCT",
    payload: {
      loading: false,
      product: data,
    },
  };
}

export function fetchProduct(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoading());
    const output = await axios.get(`${API_URL}/products/${id}`);
    dispatch(productFetched(output.data));
  };
}
