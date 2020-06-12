import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to="/">Awesome </NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
    </div>
  );
}
