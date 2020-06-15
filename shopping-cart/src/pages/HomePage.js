import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import "./HomePage.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../store/categories/selector";
import { fetchCategories } from "../store/categories/action";
import { fetchProducts } from "../store/products/action";
import { selectProducts } from "../store/products/selector";
import { selectFavorites } from "../store/cart/selector";
import { addFavorite, removeFavorite } from "../store/cart/action";

export default function HomePage() {
  const categories = useSelector(selectCategories);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const [tag, set_tag] = useState(0);
  const [filteredProducts, set_filterByTag] = useState([]);
  const [sortedProducts, set_sortedProducts] = useState([]);
  const selected = useSelector(selectFavorites);

  const filterByTagHandler = () => {
    const output = products.filter((p) => {
      return p.categoryId === tag;
    });
    set_filterByTag(output);
  };

  const sortHandler = () => {
    const sortedProducts = filteredProducts.sort(function (
      product_a,
      product_b
    ) {
      return product_b - product_a;
    });
    set_sortedProducts(sortedProducts);
  };

  useEffect(() => {
    dispatch(fetchCategories);
    dispatch(fetchProducts);
  }, []);

  useEffect(() => {
    filterByTagHandler();
  }, [tag]);

  useEffect(() => {
    set_filterByTag(products);
  }, [products]);

  useEffect(() => {
    // set_sortedProducts(products);
  }, []);

  return (
    <div className="HomePage">
      <div className="heading">
        <p className="meta">
          Filter by:
          <span className="tags">
            {categories.map((tag) => {
              return (
                <React.Fragment key={tag.id}>
                  <button onClick={() => set_tag(tag.id)}>
                    <span className="Tag">{tag.name}</span>
                  </button>
                </React.Fragment>
              );
            })}
          </span>
          sort by: <button onClick={sortHandler}>price</button>
          <span className="ml-5"></span>
        </p>
      </div>
      <div className="row">
        {filteredProducts.map((product, i) => {
          return (
            //
            <div className="col-lg-4 grid" key={i}>
              <Link to={`/products/${product.id}`}>
                <img src={product.imageUrl} alt="pic" />
              </Link>
              <p>
                {product.name} <strong>Price:{product.price}</strong>
              </p>
              {selected.includes(product.id) ? (
                <div>
                  <button onClick={() => dispatch(removeFavorite(product.id))}>
                    ⊖
                  </button>{" "}
                  {selected.filter((f) => f === product.id).length} in cart{" "}
                  <button onClick={() => dispatch(addFavorite(product.id))}>
                    ⊕
                  </button>
                </div>
              ) : (
                <button onClick={() => dispatch(addFavorite(product.id))}>
                  add to Cart ⊕
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
