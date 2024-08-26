import React from "react";
import { Link } from "react-router-dom";

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter-tags">
        <Link to="/telefony/smartfony">
          <button>Смартфоны</button>
        </Link>
        <Link to="/telefony/knopochnye">
          <button>Кнопочные телефоны</button>
        </Link>
        <Link to="/telefony/samsung">
          <button>Samsung</button>
        </Link>
        <Link to="/telefony/xiaomi">
          <button>Xiaomi</button>
        </Link>
        <Link to="/telefony/iphone">
          <button>iPhone</button>
        </Link>
        <Link to="/telefony/novey">
          <button>Novey</button>
        </Link>
        <Link to="/telefony/huawei">
          <button>Huawei</button>
        </Link>
        <Link to="/telefony/vivo">
          <button>Vivo</button>
        </Link>
        <Link to="/telefony/realme">
          <button>Realme</button>
        </Link>
        <Link to="/telefony/nokia">
          <button>Nokia</button>
        </Link>
        <Link to="/telefony/honor">
          <button>Honor</button>
        </Link>
        <Link to="/telefony/tecno">
          <button>Tecno</button>
        </Link>
        <Link to="/telefony/oppo">
          <button>OPPO</button>
        </Link>
      </div>
    </div>
  );
};

export default Filter;
