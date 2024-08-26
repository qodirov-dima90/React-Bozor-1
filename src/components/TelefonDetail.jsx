import React from "react";
import { useParams } from "react-router-dom";

const TelefonDetail = () => {
  const { id } = useParams();

  const products = {
    1: {
      title: "Смартфон Xiaomi Redmi Note 11 Pro 8/128GB",
      description: "Bu yerda Xiaomi Redmi Note 11 Pro.",
      image: "/telefon1.jpg",
    },
    2: {
      title: "Смартфон Samsung Galaxy S24 Ultra 12/256GB",
      description: "Bu yerda Samsung Galaxy S24 Ultra.",
      image: "/telefon2.jpg",
    },
    3: {
      title: "iPhone 12 pro max",
      description: "Bu yerda iPhone 12 pro max.",
      image: "/telefon3.jpg",
    },
  };

  const product = products[id];

  return (
    <div className="telefon-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
    </div>
  );
};

export default TelefonDetail;
