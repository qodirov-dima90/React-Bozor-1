import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import TelefonDetail from "./components/TelefonDetail";
import Tablets from "./components/Tablets";
import TabletDetail from "./components/TabletDetail";
import TVs from "./components/TVs";
import TVDetail from "./components/TVDetail";
import Laptops from "./components/Laptops";
import LaptopDetail from "./components/LaptopDetail";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/telefony" element={<Home />} />
        <Route path="/telefony/:category" element={<Products />} />
        <Route path="/telefon/:id" element={<TelefonDetail />} />
        <Route path="/planshety" element={<Tablets />} />
        <Route path="/tablet/:id" element={<TabletDetail />} />
        <Route path="/televizory" element={<TVs />} />
        <Route path="/tv/:id" element={<TVDetail />} />
        <Route path="/noutbuki" element={<Laptops />} />
        <Route path="/laptop/:id" element={<LaptopDetail />} />
        <Route path="/smart-chasy" element={<Products />} />
        <Route path="/konditsionery" element={<Products />} />
        <Route path="/kholodilniki" element={<Products />} />
        <Route path="/monitory" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
