export const selectProductLoading = (state) => {
  return state.product.loading;
};

export const selectSingleProduct = (state) => {
  return state.product.product;
};
