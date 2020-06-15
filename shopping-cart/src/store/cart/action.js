export function addFavorite(id) {
  console.log("inside addFavorites with id", id);
  return async function thunk(dispatch, getState) {
    dispatch({
      type: "ADD_TO_FAV",
      payload: {
        favorites: id,
      },
    });
  };
}

export function removeFavorite(id) {
  return async function thunk(dispatch, getState) {
    dispatch({
      type: "REMOVE_TO_FAV",
      payload: id,
    });
  };
}
