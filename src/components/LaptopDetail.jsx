import React from "react";
import { useParams } from "react-router-dom";

const LaptopDetail = () => {
  const { id } = useParams();

  const laptops = {
    1: {
      title: "Dell XPS 13",
      description: "Dell XPS 13.",
      image: "/laptop1.jpg",
    },
    2: {
      title: "MacBook Pro 16-inch",
      description: "MacBook Pro 16-inch.",
      image: "/laptop2.jpg",
    },
  };

  const laptop = laptops[id];

  if (!laptop) {
    return <div>Laptop not found</div>;
  }

  return (
    <div className="laptop-detail">
      <h2>{laptop.title}</h2>
      <img src={laptop.image} alt={laptop.title} />
      <p>{laptop.description}</p>
    </div>
  );
};

export default LaptopDetail;
