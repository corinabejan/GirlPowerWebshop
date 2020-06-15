const initialState = {
  loading: true,
  categories: [],
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING": {
      return {
        ...state,
        loading: action.payload.loading,
      };
    }
    case "FETCH_POSTS": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
