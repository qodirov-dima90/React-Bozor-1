import React from "react";
import { useParams } from "react-router-dom";

const TVDetail = () => {
  const { id } = useParams();

  const tvs = {
    1: {
      title: "Samsung 65-Inch QLED TV",
      description: "Samsung 65-Inch QLED TV.",
      image: "/tv1.jpg",
    },
    2: {
      title: "LG 55-Inch OLED TV",
      description: "LG 55-Inch OLED TV.",
      image: "/tv2.jpg",
    },
  };

  const tv = tvs[id];

  return (
    <div className="tv-detail">
      <h2>{tv.title}</h2>
      <img src={tv.image} alt={tv.title} />
      <p>{tv.description}</p>
    </div>
  );
};

export default TVDetail;
