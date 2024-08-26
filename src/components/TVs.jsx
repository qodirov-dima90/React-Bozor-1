import React from "react";
import { Link } from "react-router-dom";

const TVs = () => {
  const tvs = [
    {
      id: 1,
      title: "Samsung 65-Inch QLED TV",
      price: "10 500 000 сум",
      image: "/tv1.jpg",
      description: "Samsung 65-Inch QLED TV.",
    },
    {
      id: 2,
      title: "LG 55-Inch OLED TV",
      price: "8 200 000 сум",
      image: "/tv2.jpg",
      description: "LG 55-Inch OLED TV.",
    },
  ];

  return (
    <div className="tv-list">
      {tvs.map((tv) => (
        <div className="tv-item" key={tv.id}>
          <img src={tv.image} alt={tv.title} className="tv-image" />
          <div className="tv-details">
            <h2>{tv.title}</h2>
            <p>{tv.price}</p>
            <Link to={`/tv/${tv.id}`} className="tv-link">
              Подробнее
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TVs;
