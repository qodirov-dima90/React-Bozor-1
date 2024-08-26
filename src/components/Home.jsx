import React from "react";
import Filter from "./Filter";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <div className="home">
      <h1>Мобильные телефоны</h1>
      <Filter />
      <ProductList />
    </div>
  );
};

export default Home;
