import React from "react";
import "./Product.css";

export default function Product({ name, description, price }) {
  return (
    <div className="product">
      <h1 className="product-name">{name}</h1>
      <p className="product-desc">{description}</p>
      <span className="product-price">{price}</span>
    </div>
  );
}
