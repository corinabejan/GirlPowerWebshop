import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Product from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/products/:id" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/home" component={Homepage} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
