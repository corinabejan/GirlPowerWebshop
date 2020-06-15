import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../store/Product/action";
import { useDispatch, useSelector } from "react-redux";
import { selectSingleProduct } from "../store/Product/selector";
import { selectCategories } from "../store/categories/selector";
import { fetchCategories } from "../store/categories/action";
import { addFavorite, removeFavorite } from "../store/cart/action";
import { selectFavorites } from "../store/cart/selector";

export default function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [category, setcategory] = useState(0);
  const product = useSelector(selectSingleProduct);
  const categories = useSelector(selectCategories);
  const selected = useSelector(selectFavorites);

  const findCategory = (catId) => {
    const cat = categories.find((c) => c.id === catId);
    setcategory(cat);
  };

  useEffect(() => {
    dispatch(fetchCategories);
    dispatch(fetchProduct(id));
  }, [id]);

  useEffect(() => {
    if (product) {
      findCategory(product.categoryId);
    }
  }, [product]);

  return (
    <div>
      {!product ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          <div className="col-lg-6">
            <img src={product.imageUrl} alt="ProductPic" />
            <p>€ {product.price}</p>
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
          <div className="col-lg-6">
            <h1>{product.name}</h1>
            <p>{category.name}</p>
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
