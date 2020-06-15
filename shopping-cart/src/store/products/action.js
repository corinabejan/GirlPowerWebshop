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

export function productsFetched(data) {
  return {
    type: "FETCH_PRODUCTS",
    payload: {
      loading: false,
      products: data,
    },
  };
}

export async function fetchProducts(dispatch, getState) {
  const state = getState();
  dispatch(startLoading());
  const output = await axios.get(`${API_URL}/products/`);
  dispatch(productsFetched(output.data.products));
}
