import React from "react";
import { Link } from "react-router-dom";

const Laptops = () => {
  const laptops = [
    {
      id: 1,
      title: "Dell XPS 13",
      price: "15 000 000 сум",
      image: "/laptop1.jpg",
      description: "Dell XPS 13.",
    },
    {
      id: 2,
      title: "MacBook Pro 16-inch",
      price: "25 000 000 сум",
      image: "/laptop2.jpg",
      description: "MacBook Pro 16-inch.",
    },
  ];

  return (
    <div className="laptop-list">
      {laptops.map((laptop) => (
        <div className="laptop-item" key={laptop.id}>
          <img src={laptop.image} alt={laptop.title} className="laptop-image" />
          <div className="laptop-details">
            <h2>{laptop.title}</h2>
            <p>{laptop.price}</p>
            <Link to={`/laptop/${laptop.id}`} className="laptop-link">
              Подробнее
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Laptops;
