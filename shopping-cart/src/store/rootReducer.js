import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import categoryReducer from "./categories/reducer";
import productsReducer from "./products/reducer";
import cartReducer from "./cart/reducer";
import productReducer from "./Product/reducer";

const reducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
});

export default reducer;
