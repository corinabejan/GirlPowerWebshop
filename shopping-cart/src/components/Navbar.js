import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { selectFavorites } from "../store/cart/selector";
import { selectProfile } from "../store/auth/selector";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/auth/action";

export default function Navbar() {
  const cartList = useSelector(selectFavorites);
  const user = useSelector(selectProfile);
  const dispatch = useDispatch();

  console.log("cartList", cartList.length);

  return (
    <div>
      <nav>
        {user ? (
          <div className="toolbar">
            <NavLink className="mr-5" to="/">
              Awesome Webshop
            </NavLink>
            <em>Welcome {user.firstName}</em>
            <NavLink
              className="ml-5"
              to="/cart"
            >{`${cartList.length} products in the cart`}</NavLink>
            <Link to="/">
              <button className="ml-4" onClick={() => dispatch(logout)}>
                Logout
              </button>
            </Link>
          </div>
        ) : (
          <Link to="/auth/login">login</Link>
        )}
      </nav>
    </div>
  );
}
