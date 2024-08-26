import React from "react";
import { Link } from "react-router-dom";

const Tablets = () => {
  const tablets = [
    {
      id: 1,
      title: "Samsung Galaxy Tab S8",
      price: "4 500 000 сум",
      image: "/tablet1.jpg",
      description: "Samsung Galaxy Tab S8 haqida batafsil ma'lumot.",
    },
    {
      id: 2,
      title: "Apple iPad Pro 11-inch",
      price: "9 200 000 сум",
      image: "/tablet2.jpg",
      description: "Apple iPad Pro 11-inch haqida batafsil ma'lumot.",
    },
  ];

  return (
    <div className="tablet-list">
      {tablets.map((tablet) => (
        <div className="tablet-item" key={tablet.id}>
          <img src={tablet.image} alt={tablet.title} className="tablet-image" />
          <div className="tablet-details">
            <h2>{tablet.title}</h2>
            <p>{tablet.price}</p>
            <Link to={`/tablet/${tablet.id}`} className="tablet-link">
              Подробнее
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tablets;
