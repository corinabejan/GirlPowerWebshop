import React from "react";
import { selectFavorites } from "../store/cart/selector";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from "../store/products/selector";
import "./Cart.scss";
import { addFavorite, removeFavorite } from "../store/cart/action";

export default function Cart() {
  const cartList = useSelector(selectFavorites);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const cartProducts = products.filter((p) => {
    return cartList.includes(p.id);
  });

  const prices = cartProducts.map((p) => {
    return p.price * cartList.filter((f) => f === p.id).length;
  });

  console.log("carlist have:", cartList, products);
  return (
    <div className="Cart">
      <h1>Your Shopping Cart</h1>
      <table className="tableStyle">
        <tbody>
          {cartProducts.map((product) => {
            return (
              <tr>
                <td>{product.name}</td>
                <td>
                  <div>
                    <button
                      onClick={() => dispatch(removeFavorite(product.id))}
                    >
                      ⊖
                    </button>{" "}
                    <button onClick={() => dispatch(addFavorite(product.id))}>
                      ⊕
                    </button>
                    {cartList.filter((f) => f === product.id).length}x
                  </div>
                </td>
                <td>{product.price}</td>
                <td>
                  {product.price *
                    cartList.filter((f) => f === product.id).length}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr className="line" />
      <div className="total">{`total    € ${prices.reduce((total, num) => {
        return total + num;
      }, 0)}`}</div>
    </div>
  );
}
