const initialState = {
  loading: true,
  product: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING": {
      return {
        ...state,
        loading: action.payload.loading,
      };
    }
    case "FETCH_PRODUCT": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
