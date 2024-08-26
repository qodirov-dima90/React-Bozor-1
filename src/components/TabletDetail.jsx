import React from "react";
import { useParams } from "react-router-dom";

const TabletDetail = () => {
  const { id } = useParams();

  const tablets = {
    1: {
      title: "Samsung Galaxy Tab S8",
      description: "Samsung Galaxy Tab S8.",
      image: "/tablet1.jpg",
    },
    2: {
      title: "Apple iPad Pro 11-inch",
      description: "Apple iPad Pro 11-inch.",
      image: "/tablet2.jpg",
    },
  };

  const tablet = tablets[id];

  return (
    <div className="tablet-detail">
      <h2>{tablet.title}</h2>
      <img src={tablet.image} alt={tablet.title} />
      <p>{tablet.description}</p>
    </div>
  );
};

export default TabletDetail;
