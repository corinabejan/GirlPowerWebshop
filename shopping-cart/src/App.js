import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/product" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
