import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ category }) => {
  const products = [
    {
      id: 1,
      title: "Смартфон Xiaomi Redmi Note 11 Pro 8/128GB",
      price: "3 111 000 сум",
      image: "/telefon1.jpg",
      categories: ["smartfony", "xiaomi"],
    },
    {
      id: 2,
      title: "Смартфон Samsung Galaxy S24 Ultra 12/256GB",
      price: "12 115 200 сум",
      image: "/telefon2.jpg",
      categories: ["smartfony", "samsung"],
    },
    {
      id: 3,
      title: "iPhone 12 pro max",
      price: "10 115 200 сум",
      image: "/telefon3.jpg",
      categories: ["smartfony", "iPhone"],
    },
  ];

  const filteredProducts = category
    ? products.filter((product) => product.categories.includes(category))
    : products;

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <div className="product-item" key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <div className="product-details">
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <Link to={`/telefon/${product.id}`} className="product-link">
              Подробнее
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
