const initialState = {
  favorites: [],
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_TO_FAV": {
      return {
        favorites: [...state.favorites, payload.favorites],
      };
    }
    case "REMOVE_TO_FAV": {
      const fav = [...state.favorites];
      fav.splice(fav.indexOf(payload), 1);
      return {
        favorites: fav,
      };
    }
    default:
      return state;
  }
}
