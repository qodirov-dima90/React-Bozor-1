import React from "react";
import { Link } from "react-router-dom";

const Telefon = ({ telefon }) => {
  return (
    <div className="telefon">
      <img src={telefon.image} alt={telefon.name} className="telefon-image" />
      <div className="telefon-details">
        <h3>
          <Link to={`/telefon/${telefon.id}`}>{telefon.name}</Link>
        </h3>
        <p className="telefon-price">{telefon.price}</p>
        <p className="telefon-usdPrice">{telefon.usdPrice}</p>
        <p className="telefon-offers">{telefon.offers}</p>
      </div>
    </div>
  );
};

export default Telefon;
