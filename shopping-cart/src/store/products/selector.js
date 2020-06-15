export const selectProductLoading = (state) => {
  return state.products.loading;
};

export const selectProducts = (state) => {
  return state.products.products;
};
