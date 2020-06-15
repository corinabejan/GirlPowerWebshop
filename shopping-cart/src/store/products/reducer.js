const initialState = {
  loading: true,
  products: [],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING": {
      return {
        ...state,
        loading: action.payload.loading,
      };
    }
    case "FETCH_PRODUCTS": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
